function select2() {

    selectpand.addEventListener("change", function () {

        var x = selectpand.value

        document.getElementById("select2").innerHTML = ""
        for (var i of json[x]) {
            x = selectpand.value

            var url = i.value 
            // console.log(url);
            // console.log(i)
            // console.log(json[x]);
            var myOpition = document.createElement("option")
            var mytext = document.createTextNode(i.name)
            myOpition.appendChild(mytext)

            document.getElementById("select2").appendChild(myOpition)

        }
        selectSinger.addEventListener('change' , function() {


            var seletedSinger =  url ;
            var pageSinger = seletedSinger ;
            location.assign(pageSinger)
        })
        
    })

}
select2();