var images = [ "https://i.postimg.cc/MKdhy06Z/family.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" ,"https://i.postimg.cc/JnL6wtrd/sister.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Puneet Saraf", "Saisha Saraf", "Me", "Archana Saraf"];
var i = 0;
function update123()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
     updatedImage = images[i];
     updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}