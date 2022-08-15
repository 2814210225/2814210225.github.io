window.onload = function () {
    setInterval(function () {
        let date = new Date();
        let year = date.getFullYear();

        let m = date.getMonth() + 1;
        let month;
        if (m < 10)
            month = "0" + m;
        else {
            month = m;
        }

        let d = date.getDate();
        let day;
        if (d < 10)
            day = "0" + d;
        else {
            day = d;
        }

        let d1 = document.getElementById('Date1');
        d1.innerHTML = year + '/' + month + '/' + day;
        let d2 = document.getElementById('Date2');
        d2.innerHTML = year + '/' + month + '/' + day;
    }, 1000)

    let name = document.getElementById("nameDiv");
    let date1 = document.getElementById("time1");
    let date2 = document.getElementById("time2");

    name.onclick = edit;
    date1.onclick = edit;
    date2.onclick = edit;

}

function edit() {
    let parameter = event.srcElement;
    let oldValue = parameter.innerText;
    parameter.innerHTML = "<input type='text' class='input2'/>";
    let input = parameter.firstChild;
    if (input.tagName == "INPUT") {
        input.value = oldValue;
        //选中输入框内部的文本
        input.select();
        //绑定输入框失去焦点事件 , 失去焦点，更新参数
        input.onblur = update;
    }
}

function update() {
    let input = event.srcElement;
    let newValue = input.value;
    let parameter = input.parentElement;
    parameter.innerText = newValue;
}

function selectImage(file) {
    if (!file.files || !file.files[0]) {
        return;
    }
    let reader = new FileReader();
    reader.onload = function (evt) {
        document.getElementById('image').src = evt.target.result;
        image = evt.target.result;
    };
    reader.readAsDataURL(file.files[0]);
}