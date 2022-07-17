array_name = [];

function submit(){
   
    var name_1 = document.getElementById("name_of_student_1").value
    var name_2 = document.getElementById("name_of_student_2").value
    var name_3 = document.getElementById("name_of_student_3").value
    var name_4 = document.getElementById("name_of_student_4").value

    array_name.push(name_1);
    array_name.push(name_2);
    array_name.push(name_3);
    array_name.push(name_4);

    console.log(array_name);
    document.getElementById("display_name").innerHTML = array_name;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function sorting(){
    array_name.sort();
    console.log(array_name);
    document.getElementById("display_name").innerHTML = array_name;
}
  