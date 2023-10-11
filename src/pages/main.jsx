import React from 'react'
import '../css/main.css'

function save(){
    var inp1 = document.getElementById('inp1').value
    var inp2 = document.getElementById('inp2').value
    var inp3 = document.getElementById('inp3').value
    var inp4 = document.getElementById('inp4').value
    var inp5 = document.getElementById('inp5').value
    var divlist = document.getElementById('divlist')
    var divs = document.createElement('div')
    var div1 = document.createElement('div')
    var div2 = document.createElement('div')
    var div3 = document.createElement('div')
    var div4 = document.createElement('div')
    var div5 = document.createElement('div')
    var btn1 = document.createElement('Link')
    var btn2 = document.createElement('Link')
    var btns = document.createElement('div')
    window.localStorage.setItem('inp1', inp1)
    window.localStorage.setItem('inp2', inp2)
    window.localStorage.setItem('inp3', inp3)
    window.localStorage.setItem('inp4', inp4)
    window.localStorage.setItem('inp5', inp5)
    

    divs.style.display = 'flex'
    btns.style.display = 'flex'
    div1.style.padding = '5px 50px'
    div2.style.padding = '5px 50px'
    div3.style.padding = '5px 50px'
    div4.style.padding = '5px 50px'
    div5.style.padding = '5px 50px'
    div1.style.border = '.5px solid rgb(205, 191, 191)'
    div2.style.border = '.5px solid rgb(205, 191, 191)'
    div3.style.border = '.5px solid rgb(205, 191, 191)'
    div4.style.border = '.5px solid rgb(205, 191, 191)'
    div5.style.border = '.5px solid rgb(205, 191, 191)'
    div1.style.width = '25px'
    div2.style.width = '54px'
    div3.style.width = '57px'
    div4.style.width = '58.5px'
    div5.style.width = '77px'
    div1.innerText = inp1
    div2.innerText = inp2
    div3.innerText = inp3
    div4.innerText = inp4
    div5.innerText = inp5
    btn1.innerText = 'Edit'
    btn1.style.padding = '6px 25px'
    btn1.style.backgroundColor = 'rgb(76, 172, 76)'
    btn1.style.color = 'white'
    btn1.style.border = 'none'
    btn1.style.borderRadius = '5px'
    btn2.innerText = 'Trash'
    btn2.style.padding = '6px 25px'
    btn2.style.backgroundColor = 'red'
    btn2.style.color = 'white'
    btn2.style.border = 'none'
    btn2.style.borderRadius = '5px'
    btn1.setAttribute('to', '/page2')
    btn1.setAttribute('to', '/page3')



    divlist.appendChild(divs)
    divs.appendChild(div1)
    divs.appendChild(div2)
    divs.appendChild(div3)
    divs.appendChild(div4)
    divs.appendChild(div5)
    divs.appendChild(btns)
    btns.appendChild(btn1)
    btns.appendChild(btn2)
}


fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(json => {console.log(json)

        var id1 = document.getElementById('id1')
        var name1 = document.getElementById('name1')
        var email1 = document.getElementById('email1')
        var phone1 = document.getElementById('phone1')
        var address1 = document.getElementById('address1')
        id1.innerText = json.data[0].id
        name1.innerHTML = json.data[0].first_name
        email1.innerText = json.data[0].email
        phone1.innerText = json.data[0].last_name
        address1.innerText = json.data[0].first_name

        var id2 = document.getElementById('id2')
        var name2 = document.getElementById('name2')
        var email2 = document.getElementById('email2')
        var phone2 = document.getElementById('phone2')
        var address2 = document.getElementById('address2')
        id2.innerText = json.data[1].id
        name2.innerHTML = json.data[1].first_name
        email2.innerText = json.data[1].email
        phone2.innerText = json.data[1].last_name
        address2.innerText = json.data[1].first_name
    })

export default function main() {
  return (
    <div>
        <div className="container">
        <div class="page1">
        <h1>One Page CRUD Ajax PHP/MySQL</h1>
        <form action="" id="form1">
            <div class="show-div">
                <div>Show</div>
                <div>entries</div>
            </div> 
            <div class="search">
                <label for="search">Search:</label>
                <input type="text" name="search"/>
            </div>  
        </form>
        <div class="main">
            <div>ID</div>
            <div>Name</div>
            <div>Email</div>
            <div>Phone</div>
            <div>Address</div>
            <div>Action</div>
        </div>
        <div id="divlist">
            <div class="div1">
                <div id="id1"></div>
                <div id="name1"></div>
                <div id="email1"></div>
                <div id="phone1"></div>
                <div id="address1"></div>
                <div id="action">
                    <button id="act-btn1">Edit</button>
                    <button id="act-btn2">Trash</button>
                </div>
            </div>
            <div class="div2">
                <div id="id2"></div>
                <div id="name2"></div>
                <div id="email2"></div>
                <div id="phone2"></div>
                <div id="address2"></div>
                <div id="action">
                    <button id="act-btn1">Edit</button>
                    <button id="act-btn2">Trash</button>
                </div>
            </div>
        </div>
        </div>
        <div className="names">
            <label for="id">ID</label><br/>
            <input id="inp1" type="text" placeholder="Identify"/><br/>
            <label for="id">Name</label><br/>
            <input id="inp2" type="text" placeholder="Full Name"/><br/>
            <label for="id">Email</label><br/>
            <input id="inp3" type="text" placeholder="Your Email"/><br/>
            <label for="id">Phone Number</label><br/>
            <input id="inp4" type="text" placeholder="Mobile Phone Number"/><br/>
            <label for="id">Address</label><br/>
            <input id="inp5" type="text" placeholder="Street Address"/><br/>
            <button onClick={save} type="button" class="save-btn">Save</button>
        </div>
    </div>
    </div>
  )
}
