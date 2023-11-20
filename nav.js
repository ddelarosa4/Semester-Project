// ... Your existing code ...

function toggleDropdown() {
    var box = document.querySelector("#services-box");
    var arrow = document.querySelector(".arrow");

    box.classList.toggle('show');
    arrow.classList.toggle('up', box.classList.contains('show'));
}




function toggleNav() {
    var navList = document.querySelector('nav ul');
    navList.classList.toggle('show');
}

const navContainer = document.createElement('nav');
navContainer.innerHTML = `
    <div class="nav-icon" onclick="toggleNav()">&#9776;</div>
    <ul>
        <li><a href="../index.html">Home</a></li>
        <li class="dropdown" onclick="toggleDropdown()">
            <a href="#"><span class="arrow">&#9660;</span>Subjects
            <div class="dropdown-box" id="services-box">
                <!-- Content for the dropdown box -->
                <a href="Subjetcs/Math.html">Math</a>
                <a href="Subjetcs/science.html">Science</a>
                <a href="Subjetcs/computerScience.html">Computer Science</a>
                <a href="Subjetcs/english.html">English </a>
            </div>
            
        </li>
    </ul>
`;

document.body.appendChild(navContainer);

