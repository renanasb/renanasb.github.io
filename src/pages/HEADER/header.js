function header() {
    headerrElement.innerHTML = `  <header>
    <nav class="navbar navbar-expand-lg " id="cor-navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="./header.html"><b>início</b></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="./pagina.html"><b>Sobre mim</b> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="./objetivo.html"><b>Objetivo</b></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../Artigo.html"> <b>Artigo</b> </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <b>Projetos </b>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true"></a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</header>
`
}


function footer() {
    footerrElement.innerHTML =`<footer class=" fixed-bottom   mt-4 text-center "  id="cor-navbar"> RENAN ALVES </footer>
    `
}

header()
footer()