
class NavComponent extends HTMLElement {
    connectedCallback() {
        // super();

        this.attachShadow({ mode: "open" }); // sets and returns 'this.shadowRoot'
        const wrapper = document.createElement("header");

        const nav = document.createElement("nav");
        nav.setAttribute("className", "navbar navbar-expand-lg bg-body-tertiary");

        const div = document.createElement("div");
        div.setAttribute("className", "container-fluid");


        const a = document.createElement("a");
        a.setAttribute("className", "navbar-brand");
        a.setAttribute("href", "/");

        const button = document.createElement("button");
        button.setAttribute("className", "navbar-toggler");
        button.setAttribute("type", "button");
        button.setAttribute("data-bs-toggle", "collapse");
        button.setAttribute("data-bs-target", "#navbarNav");
        button.setAttribute("aria-controls", "navbarNav");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Toggle navigation");


        const buttonSpan = document.createElement("span");
        buttonSpan.setAttribute("className", "navbar-toggler-icon");

        const divList = document.createElement("div");
        divList.setAttribute("className", "collapse navbar-collapse");
        divList.setAttribute("id", "navbarNav");

        const ul = document.createElement("ul");
        ul.setAttribute("className", "navbar-nav");

        const li1 = document.createElement("li");
        li1.setAttribute("className", "nav-item")

        const li1a = document.createElement("a");
        li1a.setAttribute("className", "nav-link");
        li1a.setAttribute("href", "/");
        li1a.innerText = "Home";

        const li2 = document.createElement("li");
        li2.setAttribute("className", "nav-item")

        const li2a = document.createElement("a");
        li2a.setAttribute("className", "nav-link");
        li2a.setAttribute("href", "/survey");
        li2a.innerText = "Survey";

        wrapper.appendChild(div);
        div.appendChild(a);
        div.appendChild(button);
        div.appendChild(divList);
        button.appendChild(buttonSpan);
        divList.appendChild(ul);
        ul.appendChild(li1);
        ul.appendChild(li2);
        li1.appendChild(li1a);
        li2.appendChild(li2a);
        this.innerHTML = wrapper;
        this.shadowRoot.append(wrapper);

        // <header>
        //   <nav className="navbar navbar-expand-lg bg-body-tertiary">
        //       <div className="container-fluid">
        //           <a className="navbar-brand" href="#">Navbar</a>
        //           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //               <span className="navbar-toggler-icon"></span>
        //           </button>
        //           <div className="collapse navbar-collapse" id="navbarNav">
        //               <ul className="navbar-nav">
        //                   <li className="nav-item">
        //                       <a className="nav-link" aria-current="page" href="/">Home</a>
        //                   </li>
        //                   <li className="nav-item">
        //                       <a className="nav-link" href="/survey">Survey</a>
        //                   </li>
        //               </ul>
        //           </div>
        //       </div>
        //   </nav>
        // </header>
    }
}
customElements.define('Nav-Component', NavComponent);