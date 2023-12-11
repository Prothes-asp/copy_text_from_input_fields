function Copytxt(){
    let txtFld = document.getElementById('txtField');
    let showContent = document.getElementById('content');

    txtFld.select();
    document.execCommand("copy");
    showContent.innerHTML = "Copy Text : " + txtFld.value;
}
