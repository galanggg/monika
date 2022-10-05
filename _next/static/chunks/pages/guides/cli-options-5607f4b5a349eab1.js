(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[208],{7745:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/cli-options",function(){return t(8060)}])},8060:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return c},meta:function(){return s}});t(7294);var n=t(3905),i=t(8470);function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s={id:"cli-options",title:"Command-line Options"},l={meta:s},r=function(e){var a=e.children,t=o(e,["children"]);return(0,n.kt)(i.C,Object.assign({meta:s},t),a)};function c(e){var a=e.components,t=o(e,["components"]);return(0,n.kt)(r,Object.assign({},l,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Monika can be run with the single command ",(0,n.kt)("inlineCode",{parentName:"p"},"monika")," typed into the command shell. However to fully enjoy its flexibility, there are several options and arguments that can be used."),(0,n.kt)("p",null,"The common ",(0,n.kt)("inlineCode",{parentName:"p"},"-h")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," displays all available options"),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika -h\n")),(0,n.kt)("h2",Object.assign({},{id:"configuration"}),"Configuration",(0,n.kt)("a",Object.assign({parentName:"h2"},{href:"#configuration",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"Monika by default will look for the ",(0,n.kt)("inlineCode",{parentName:"p"},"monika.yml")," config file.\nYou may want to store different configurations for different environments or projects. Applying custom configurations is straightforward by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"-c")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"--config")," flag followed by the filename."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --config staging-set.yml\n")),(0,n.kt)("p",null,"A neat feature is that the configuration file is watched and any changes will cause Monika to reload."),(0,n.kt)("p",null,"You can also use a configuration from some remote resource, which you specify using the same ",(0,n.kt)("inlineCode",{parentName:"p"},"-c")," flag and a URI address."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika -c https://raw.githubusercontent.com/hyperjumptech/monika/main/config_sample/config.desktop.example.yml\n")),(0,n.kt)("p",null,"For remote configuration files, you can additionally specify how often (in seconds) Monika checks for changes with the ",(0,n.kt)("inlineCode",{parentName:"p"},"--config-interval")," switch like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika -c https://raw.githubusercontent.com/hyperjumptech/monika/main/config_sample/config.desktop.example.yml --config-interval 10\n")),(0,n.kt)("p",null,"By default, monika will check remote locations once every 15 minutes."),(0,n.kt)("h3",Object.assign({},{id:"multiple-configurations"}),"Multiple configurations",(0,n.kt)("a",Object.assign({parentName:"h3"},{href:"#multiple-configurations",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"Monika also supports multiple sources of configuration at the same time.\n",(0,n.kt)("strong",{parentName:"p"},"Any top-level")," keys from the first argument will be overridden by the later source(s)."),(0,n.kt)("p",null,"For example, assuming you have a file named ",(0,n.kt)("inlineCode",{parentName:"p"},"only-notif.yml")," whose content ",(0,n.kt)("inlineCode",{parentName:"p"},'{"notifications":[<your-notifications-here>]}')),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"# only-notif.yml's notifications will override notifications foo-monitoring.yml has\nmonika -c foo-monitoring.yml only-notif.yml\n")),(0,n.kt)("h2",Object.assign({},{id:"auto-update"}),"Auto-update",(0,n.kt)("a",Object.assign({parentName:"h2"},{href:"#auto-update",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"Monika supports automatic update with ",(0,n.kt)("inlineCode",{parentName:"p"},"--auto-update major|minor|patch"),". Where ",(0,n.kt)("inlineCode",{parentName:"p"},"major|minor|patch")," refers to ",(0,n.kt)("a",Object.assign({parentName:"p"},{href:"https://semver.org/"}),"semantic versioning (semver) specification"),". By default, the updater will check for a new Monika version every 24 hours."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --auto-update patch\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note that")," auto-update will make Monika terminate itself after successful update. To automatically restart Monika when terminated, you need to run Monika with a process manager application, e.g., monit, pm2, nodemon."),(0,n.kt)("h2",Object.assign({},{id:"create-config"}),"Create Config",(0,n.kt)("a",Object.assign({parentName:"h2"},{href:"#create-config",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"Just starting out? Want to make a new configuration? Running ",(0,n.kt)("inlineCode",{parentName:"p"},"monika")," without any parameters (and without any default config found in the working directory) will pull a default configuration ",(0,n.kt)("inlineCode",{parentName:"p"},"monika.yml")," as a starting point. Looking for more options? The ",(0,n.kt)("inlineCode",{parentName:"p"},"--create-config")," flag will spin up an easy Web based configuration file generator."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --create-config\n")),(0,n.kt)("p",null,"As an alternative, the generator is able to read HAR or postman files as input to convert into monika.yml configuration files."),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"--har")," or the ",(0,n.kt)("inlineCode",{parentName:"p"},"--postman")," in combination with ",(0,n.kt)("inlineCode",{parentName:"p"},"--create-config")," on the command line to convert those files."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --create-config --har myfile.har\n")),(0,n.kt)("p",null,"The above example creates a config file from an existing HAR archive. Auto generated files defaults to 'monika.yml'. Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"-o")," output flag to specify another name."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --create-config --postman mypostman.json -o new-monika.yml\n")),(0,n.kt)("p",null,"When generating config files, if an existing ",(0,n.kt)("inlineCode",{parentName:"p"},"monika.yml")," already exists, the user will be prompted before overwriting. To bypass the user prompt, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"--force")," flag."),(0,n.kt)("h2",Object.assign({},{id:"force"}),"Force",(0,n.kt)("a",Object.assign({parentName:"h2"},{href:"#force",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"--force")," flag forces the execution of a command. The force flag will bypass any user prompts with an affirmative. If a Yes/No prompt is normally presented, ",(0,n.kt)("inlineCode",{parentName:"p"},"--force")," will bypass the prompt and assume a Yes."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --flush --force\n")),(0,n.kt)("p",null,"The example above flushes the database without waiting for user confirmation."),(0,n.kt)("h2",Object.assign({},{id:"har"}),"HAR",(0,n.kt)("a",Object.assign({parentName:"h2"},{href:"#har",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"Monika supports HAR files as input. HAR are JSON formatted HTTP ARchive files. Follow ",(0,n.kt)("a",Object.assign({parentName:"p"},{href:"https://medium.com/hyperjump-tech/generate-your-monika-configuration-using-http-archive-har-764944cbb9e6"}),"these steps")," to generate your own HAR file from the site you've visited then use Monika to refetch the pages and ensure they still work."),(0,n.kt)("p",null,"You use the ",(0,n.kt)("inlineCode",{parentName:"p"},"-H")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"--har")," to specify a HAR file."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika -H my-file.har\n")),(0,n.kt)("h3",Object.assign({},{id:"create-config-from-har-file"}),"Create config from HAR file",(0,n.kt)("a",Object.assign({parentName:"h3"},{href:"#create-config-from-har-file",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"You can use the combination of ",(0,n.kt)("inlineCode",{parentName:"p"},"--create-config")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"--har")," flags to convert the HAR archive into a ",(0,n.kt)("inlineCode",{parentName:"p"},"monika.yml")," configuration file."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"# default to monika.yml\nmonika --create-config -H my-file.har\n")),(0,n.kt)("h3",Object.assign({},{id:"merge-har-file-to-existing-configurations"}),"Merge HAR file to existing configurations",(0,n.kt)("a",Object.assign({parentName:"h3"},{href:"#merge-har-file-to-existing-configurations",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"You can also use ",(0,n.kt)("inlineCode",{parentName:"p"},"-c/--config")," to merge properties with them. Note that using ",(0,n.kt)("inlineCode",{parentName:"p"},"--har")," will override probes passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"-c/--config"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --config monika-notifications.yml -H my-file.har\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"P.S."),": HAR files may contain sensitive information, use caution when distributing HAR filles."),(0,n.kt)("h2",Object.assign({},{id:"id"}),"Id",(0,n.kt)("a",Object.assign({parentName:"h2"},{href:"#id",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"By default Monika loops through all the probe configurations in the order they are entered. However, you can specify any run order you want using the ",(0,n.kt)("inlineCode",{parentName:"p"},"-i")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"--id")," flags."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika -i 1,3,1,2,4,5,7,7\n")),(0,n.kt)("p",null,"The above example will run probe id 1, 3, 1, 2, 4, 5, 7, 7 in that order just once. All id must be valid ids on the configuration file. You can combine the ",(0,n.kt)("inlineCode",{parentName:"p"},"--id")," flag with the ",(0,n.kt)("inlineCode",{parentName:"p"},"-r")," repeat flag to continuously repeat the specific ids."),(0,n.kt)("h2",Object.assign({},{id:"logging"}),"Logging",(0,n.kt)("a",Object.assign({parentName:"h2"},{href:"#logging",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"Monika stores requests and responses data in an internal log file. By default, it only stores data when an incident or recovery occurs. You may choose to store all requests using the ",(0,n.kt)("inlineCode",{parentName:"p"},"--keep-verbose-logs")," flag."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --keep-verbose-logs\n")),(0,n.kt)("p",null,"To dump (display) all the logs, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"-l")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"--logs")," flag."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --logs\n")),(0,n.kt)("p",null,"You can flush the log history with the ",(0,n.kt)("inlineCode",{parentName:"p"},"--flush")," option. there is no ",(0,n.kt)("inlineCode",{parentName:"p"},"-f")," short flag for this command."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --flush\n")),(0,n.kt)("p",null,"You must respond with a capital ",(0,n.kt)("inlineCode",{parentName:"p"},'"Y"')," to confirm if you want to flush the logs or use the ",(0,n.kt)("inlineCode",{parentName:"p"},"--force")," flag to force a Yes without prompting."),(0,n.kt)("h2",Object.assign({},{id:"postman"}),"Postman",(0,n.kt)("a",Object.assign({parentName:"h2"},{href:"#postman",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"NOTE: We only support Postman collection v2.0 and v2.1 files.")),(0,n.kt)("p",null,"Have an existing request on postman you want to automate? Monika supports reading postman.yml as configuration input. Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"-p")," or the ",(0,n.kt)("inlineCode",{parentName:"p"},"--postman")," switches."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika -p postman.json\n")),(0,n.kt)("h3",Object.assign({},{id:"create-config-from-postman-file"}),"Create config from Postman file",(0,n.kt)("a",Object.assign({parentName:"h3"},{href:"#create-config-from-postman-file",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"You can use the combination of ",(0,n.kt)("inlineCode",{parentName:"p"},"--create-config")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"--postman")," flags to convert the postman files to a monika.yml config file."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --create-config --postman postman.json\n")),(0,n.kt)("h3",Object.assign({},{id:"merge-postman-file-to-existing-configurations"}),"Merge Postman file to existing configurations",(0,n.kt)("a",Object.assign({parentName:"h3"},{href:"#merge-postman-file-to-existing-configurations",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"You can also use ",(0,n.kt)("inlineCode",{parentName:"p"},"-c/--config")," to merge properties with them. Note that using ",(0,n.kt)("inlineCode",{parentName:"p"},"--postman")," will override probes passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"-c/--config"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --config monika-notifications.yml --postman my-postman-collection.json\n")),(0,n.kt)("h2",Object.assign({},{id:"insomnia"}),"Insomnia",(0,n.kt)("a",Object.assign({parentName:"h2"},{href:"#insomnia",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"Use your own ",(0,n.kt)("a",Object.assign({parentName:"p"},{href:"https://insomnia.rest"}),"Insomnia")," collection with Monika by providing ",(0,n.kt)("inlineCode",{parentName:"p"},"--insomnia")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"-I"),". We currently only support Insomnia ",(0,n.kt)("strong",{parentName:"p"},"export version 4"),". You can use both JSON and YAML file format."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika -I /your/insomnia/collection.yaml # JSON / YAML\n")),(0,n.kt)("h3",Object.assign({},{id:"create-config-from-insomnia-file"}),"Create config from Insomnia file",(0,n.kt)("a",Object.assign({parentName:"h3"},{href:"#create-config-from-insomnia-file",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"Generate your Monika configuration by combining ",(0,n.kt)("inlineCode",{parentName:"p"},"--create-config")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"--insomnia")," flags to convert your Insomnia collection file to a monika config file."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --create-config --insomnia /your/insomnia/collection.yaml # JSON / YAML\n")),(0,n.kt)("h3",Object.assign({},{id:"merge-insomnia-file-to-existing-configurations"}),"Merge Insomnia file to existing configurations",(0,n.kt)("a",Object.assign({parentName:"h3"},{href:"#merge-insomnia-file-to-existing-configurations",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"Merge your existing configurations with an Insomnia collection file using ",(0,n.kt)("inlineCode",{parentName:"p"},"-c/--config")," together with ",(0,n.kt)("inlineCode",{parentName:"p"},"-I/--insomnia"),". Note that this will override probes passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"-c"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --config monika-notifications.yml --insomnia /insomnia/collection.yml\n")),(0,n.kt)("h2",Object.assign({},{id:"sitemap"}),"Sitemap",(0,n.kt)("a",Object.assign({parentName:"h2"},{href:"#sitemap",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"Monika supports reading sitemap.xml as configuration input. Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"--sitemap")," switches."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --sitemap sitemap.xml\n")),(0,n.kt)("p",null,"or you can also add ",(0,n.kt)("inlineCode",{parentName:"p"},"--one-probe")," flag to merge all requests into single probe."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --sitemap sitemap.xml --one-probe\n")),(0,n.kt)("h3",Object.assign({},{id:"create-config-from-sitemap-file"}),"Create config from Sitemap file",(0,n.kt)("a",Object.assign({parentName:"h3"},{href:"#create-config-from-sitemap-file",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"You can use the combination of ",(0,n.kt)("inlineCode",{parentName:"p"},"--create-config")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"--sitemap")," flags to convert the sitemap xml file to a monika.yml config file."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --create-config --sitemap sitemap.xml\n")),(0,n.kt)("p",null,"or you can also add ",(0,n.kt)("inlineCode",{parentName:"p"},"--one-probe")," flag to merge all requests into single probe."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --create-config --sitemap sitemap.xml --one-probe\n")),(0,n.kt)("h2",Object.assign({},{id:"prometheus"}),"Prometheus",(0,n.kt)("a",Object.assign({parentName:"h2"},{href:"#prometheus",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"You can expose the ",(0,n.kt)("a",Object.assign({parentName:"p"},{href:"https://prometheus.io/"}),"Prometheus")," metrics server with the ",(0,n.kt)("inlineCode",{parentName:"p"},"--prometheus")," flag and server port as a value."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --prometheus 3001\n")),(0,n.kt)("p",null,"Then you can scrape the metrics from ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:3001/metrics"),"."),(0,n.kt)("h3",Object.assign({},{id:"available-metrics"}),"Available Metrics",(0,n.kt)("a",Object.assign({parentName:"h3"},{href:"#available-metrics",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"Monika exposes ",(0,n.kt)("a",Object.assign({parentName:"p"},{href:"https://prometheus.io/docs/instrumenting/writing_clientlibs/#standard-and-runtime-collectors"}),"Prometheus default metrics"),", ",(0,n.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/siimon/prom-client/tree/master/lib/metrics"}),"Node.js specific metrics"),", and Monika probe metrics below."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",Object.assign({parentName:"tr"},{align:null}),"Metric Name"),(0,n.kt)("th",Object.assign({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",Object.assign({parentName:"tr"},{align:null}),"Purpose"),(0,n.kt)("th",Object.assign({parentName:"tr"},{align:null}),"Label"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"monika_probes_total")),(0,n.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Gauge"),(0,n.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Collect total probe"),(0,n.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"monika_request_status_code_info")),(0,n.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Gauge"),(0,n.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Collect HTTP status code"),(0,n.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"id"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"name"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"url"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"method"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"monika_request_response_time_seconds")),(0,n.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Histogram"),(0,n.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Collect duration of probe request in seconds"),(0,n.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"id"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"name"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"url"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"method"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"statusCode"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"monika_request_response_size_bytes")),(0,n.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Gauge"),(0,n.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Collect size of response size in bytes"),(0,n.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"id"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"name"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"url"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"method"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"statusCode"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"monika_alert_total")),(0,n.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Counter"),(0,n.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Collect total alert triggered"),(0,n.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"id"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"name"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"url"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"method"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"alertQuery"))))),(0,n.kt)("h2",Object.assign({},{id:"repeat"}),"Repeat",(0,n.kt)("a",Object.assign({parentName:"h2"},{href:"#repeat",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"By default monika will continuously loop through all your probes in the configuration. To loop for a specific number of repeats use the ",(0,n.kt)("inlineCode",{parentName:"p"},"-r")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"--repeat")," flags followed by a number. For example to repeat only 3 times type the command below:"),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika -r 3\n")),(0,n.kt)("p",null,"You can combine this flag with the ",(0,n.kt)("inlineCode",{parentName:"p"},"--id")," flag to repeat custom sequences."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika -r 3 -i 1,3,1\n")),(0,n.kt)("h2",Object.assign({},{id:"maximum-start-delay"}),"Maximum start delay",(0,n.kt)("a",Object.assign({parentName:"h2"},{href:"#maximum-start-delay",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"When there are many probes, Monika by default will not start the probing all at the same time. It will delay the start of the probing by dividing the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"--max-start-delay")," flag with the number of the probes plus a random value between 0 to 1 seconds. This is to prevent connection timeout due to probing too many probes at the same time. The default value of ",(0,n.kt)("inlineCode",{parentName:"p"},"--max-start-delay")," is 60000 (milliseconds) which corresponds to 1 minutes."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --max-start-delay 300000 # this will set max-start-delay to 5 minutes.\n")),(0,n.kt)("h2",Object.assign({},{id:"follow-redirects"}),"Follow Redirects",(0,n.kt)("a",Object.assign({parentName:"h2"},{href:"#follow-redirects",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"By default Monika will follow redirects once. You can set the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"--follow-redirects")," flag to tell Monika to follow redirects as many as you want. If you don't want to follow redirects, set the value to zero."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --follow-redirects 0 # disable following redirects\n")),(0,n.kt)("h2",Object.assign({},{id:"stun"}),"STUN",(0,n.kt)("a",Object.assign({parentName:"h2"},{href:"#stun",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"By default monika will continuously check the ",(0,n.kt)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/STUN"}),"STUN")," server every 20 second intervals. Continuously STUN checking ensures that connectivity to the outside world is guaranteed. When STUN checking fails, Monika assumes the network is down and probing will be paused."),(0,n.kt)("p",null,"You can specify the number of checking intervals using the ",(0,n.kt)("inlineCode",{parentName:"p"},"-s")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"--stun")," flags followed by a number in seconds. For example to set the interval to every 10 seconds type the parameter below:"),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika -s 10\n")),(0,n.kt)("p",null,"If the number is zero or less, monika will check the STUN server just once, not repeatedly, to get public IP."),(0,n.kt)("p",null,"For internal networks where no outside connection is needed, you can disable the STUN checking by setting the ",(0,n.kt)("inlineCode",{parentName:"p"},"-s")," flag to ",(0,n.kt)("inlineCode",{parentName:"p"},"-1")," as follows."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika -s -1\n")),(0,n.kt)("h2",Object.assign({},{id:"summary"}),"Summary",(0,n.kt)("a",Object.assign({parentName:"h2"},{href:"#summary",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"While Monika is running, you can fetch the running statistics by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"--summary")," flag from another terminal."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --summary\n")),(0,n.kt)("p",null,"Please note that you need to run the above command from the same working directory as the running monika you want to see/check.\nThe '--summary' flag also will not work when no other monika process is running."),(0,n.kt)("h2",Object.assign({},{id:"verbose"}),"Verbose",(0,n.kt)("a",Object.assign({parentName:"h2"},{href:"#verbose",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"Like your app to be more chatty and honest revealing all its internal details? Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"--verbose")," flag."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika --verbose\n")),(0,n.kt)("h2",Object.assign({},{id:"version"}),"Version",(0,n.kt)("a",Object.assign({parentName:"h2"},{href:"#version",title:"Direct link to heading",className:"anchor"}),(0,n.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"-v")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"--version")," flag prints the current application version."),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"monika -v\n")))}c.isMDXComponent=!0}},function(e){e.O(0,[547,778,470,774,888,179],(function(){return a=7745,e(e.s=a);var a}));var a=e.O();_N_E=a}]);