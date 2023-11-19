
document.write(`
<head>
    <link rel="stylesheet" type="text/css" href="../styles.css"></link>
</head>
<nav>
    <ul>
        <li> <a href="../index.html">Home</a><li>
        <li class="dropdown" onmouseover="toggleDropdown(true)" onmouseout="toggleDropdown(false)">
            <a href="#">Subjects</a>
            <div class="dropdown-box" id="services-box">
                <!-- Content for the dropdown box -->
                <a href="Math.html">Math</a>
                <a href="science.html">Science</a>
                <a href="computerScience.html">Computer Science</a>
                <a href="history.html">History </a>
                <a href="english.html">English </a>
            </div>
        </li>
        <li><a href="../resources.html">General Resources</a></li>
    </ul>
</nav>
<script src="script.js"></script>
`);
