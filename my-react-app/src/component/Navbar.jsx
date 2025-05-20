import React from 'react'
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous"></link>
export default function Navbar() {
    return (
        <div>
            <nav>

                <ul class="nav bg-light">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Signup</a>
                    </li>
                </ul>

            </nav>
        </div>
    )
}
