/**********************************************************************************
 * MIT License                                                                    *
 *                                                                                *
 * Copyright (c) 2021 Hyperjump Technology                                        *
 *                                                                                *
 * Permission is hereby granted, free of charge, to any person obtaining a copy   *
 * of this software and associated documentation files (the "Software"), to deal  *
 * in the Software without restriction, including without limitation the rights   *
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell      *
 * copies of the Software, and to permit persons to whom the Software is          *
 * furnished to do so, subject to the following conditions:                       *
 *                                                                                *
 * The above copyright notice and this permission notice shall be included in all *
 * copies or substantial portions of the Software.                                *
 *                                                                                *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR     *
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,       *
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE    *
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER         *
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  *
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  *
 * SOFTWARE.                                                                      *
 **********************************************************************************/

import net from 'net'
import { differenceInMilliseconds } from 'date-fns'
import { ProbeRequestResponse } from '../../interfaces/request'

type TCPRequest = {
  host: string
  port: number
  data: string | Uint8Array
  timeout?: number
}

type TCPResult = {
  duration: number
  status: 'UP' | 'DOWN'
  message: string
  responseData: Buffer | null
}

// tcpRequest sends out the tcp request and returns a monika standard request response
export async function tcpRequest(
  param: TCPRequest
): Promise<ProbeRequestResponse<any>> {
  const { host, port, data, timeout } = param

  let baseResponse: ProbeRequestResponse = {
    requestType: 'tcp',
    data: '',
    body: '',
    status: 0,
    headers: '',
    responseTime: 0,
  }

  const tcpResp = await tcpCheck({ host, port, data, timeout })
  baseResponse = processTCPRequestResult(tcpResp)

  return baseResponse
}

async function tcpCheck(tcpRequest: TCPRequest): Promise<TCPResult> {
  const { host, port, data, timeout } = tcpRequest

  try {
    const startTime = new Date()
    const resp = await sendTCP({ host, port, data, timeout })
    const endTime = new Date()
    const duration = differenceInMilliseconds(endTime, startTime)

    return {
      duration,
      responseData: resp,
      status: 'UP',
      message: '',
    }
  } catch (error: any) {
    return {
      duration: 0,
      responseData: null,
      status: 'DOWN',
      message: error?.message,
    }
  }
}

const SOCKETTIMEOUTMS = 10_000

async function sendTCP(tcpRequest: TCPRequest): Promise<any> {
  const { host, port, data, timeout } = tcpRequest

  return new Promise((resolve, reject) => {
    const client = net.createConnection({ host, port }, () => {
      data ? client.write(data) : client.end()
    })

    client.setTimeout(timeout || SOCKETTIMEOUTMS)

    client.on('data', (data) => {
      resolve(data.toString())
      client.end()
    })

    client.on('close', (hadError) => {
      if (hadError) reject(new Error('unknown'))

      resolve(null)
    })

    client.on('timeout', () => {
      reject(new Error('timeout'))
      client.end()
    })

    client.on('error', (error) => {
      reject(error)
      client.end()
    })
  })
}

// map tcp request result to monika base response
function processTCPRequestResult({
  duration,
  status,
  message,
  responseData,
}: TCPResult) {
  const baseResp: ProbeRequestResponse = {
    requestType: 'tcp',
    data: '',
    body: responseData || message || '-', // map tcp response data or any message into "http body" to be displayed
    status: status === 'DOWN' ? 0 : 200, // set to 0 if down, and 200 if ok
    headers: {},
    responseTime: duration,
  }

  return baseResp
}
