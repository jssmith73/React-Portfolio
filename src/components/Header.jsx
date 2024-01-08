

function Header() {

    return (
        <nav class="navbar navbar-expand-lg bg-gray-800 navbar-light sticky-top p-0">
            <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h2 class="m-0 text-primary">Josiah Smith</h2>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="/About" class="nav-item nav-link">About</a>
                    <a href="/Project" class="nav-item nav-link">Projects</a>
                    <a href="/Contact" class="nav-item nav-link">Contact</a>
                    <a href="/Resume" class="nav-item nav-link">Resume</a>

                </div>
            </div>
        </nav>
    )
};

export default Header;