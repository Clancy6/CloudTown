            function checkInput() {
                pid = document.getElementById("inputer_pid").value;
                p = document.getElementById("inputer_p").value;
                type_pic = document.getElementsByName("tp");
                way = document.getElementsByName("way");
                for(var i=0; i<3; i++) {
                    if(type_pic[i].checked) {
                        type = type_pic[i].value;
                    }
                }
                image_e = document.getElementById('image');
                if(way == "re") {
                    if(p != "") {
                        p = "-"+Number(p)+1;
                    }
                    image_e.src = "https://pixiv.re/" + pid + p + "." + type;
                } else if(way == "api"){
                    image_e.src = "https://api.102456.xyz/pixiv/pid.php?pid=" + pid + "&p=" + p;
                }
            }