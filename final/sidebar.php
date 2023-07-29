<!-- sideBar -->
<div class="left" id="mySidebar">
    <div class="top-side">
        <img src="image/profile.png" alt="">
        <p>hello, <span class="cal" style="text-decoration: underline;">CAL</span></p>
    </div>
    <hr style="border:3px solid; background-color:white; border-color:white; ">

    <a href="#" onclick=""><i class="fa fa-home">&nbsp;&nbsp;</i>Dashboard</a>
    <a href="#movie" onclick="movie()"><i class="fa fa-film">&nbsp;&nbsp;</i>Movies</a>
    <a href="#" onclick="toggleDropdown()"><i class="fa fa-file">&nbsp;&nbsp;</i>
        File Manager&#9662;
        <ul id="dropdownItems">
            <li><a href="#" onclick="">Home</a></li>
            <li><a href="#" onclick="">About</a></li>
            <li><a href="#" onclick="">Services</a></li>
            <li><a href="#" onclick="">Contact</a></li>
        </ul>
    </a>
    <a href="#" onclick=""><i class="fa fa-user">&nbsp;&nbsp;</i>User</a>
    <a href="#" onclick=""><i class="fa fa-comment">&nbsp;&nbsp;</i>Comments</a>
    <a href="#" onclick=""><i class="fa fa-star">&nbsp;&nbsp;</i>Reviews</a>
</div>