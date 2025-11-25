var cloud = {
        varName: function() {
            return this.textEdit;
          }
        }
        //WIFI NAME HERE
        var wifiName = {
          textEdit:"Guest Hotspot",
        }
        //RUNNING BANNER TEXT HERE
        var runningText = {
          textEdit:"Welcome to Cloud Hotspot Portal.",
        }
        //INFO TEXT HERE
        var infoText = {
          textEdit:"Trouble logging in using your access? Contact me @ 09626606116.",
        }
        //COPYRIGHT TEXT HERE
        var copyrightText = {
          textEdit:"Copyright &copy; 2023. All rights reserved.",
        }
        //POWERED BY TEXT HERE
        var pwrText = {
          textEdit:"A Crazy Cloud Networks Subsidiary.",
        }

        var a = cloud.varName.call(wifiName); 
        document.getElementById("callwifiName").innerHTML = a;

        var b = cloud.varName.call(runningText); 
        document.getElementById("callrunningText").innerHTML = b;

        var c = cloud.varName.call(infoText); 
        document.getElementById("callinfoText").innerHTML = c;

        var d = cloud.varName.call(copyrightText); 
        document.getElementById("callcopyrightText").innerHTML = d;

        var e = cloud.varName.call(pwrText); 
        document.getElementById("callpwrText").innerHTML = e;

        