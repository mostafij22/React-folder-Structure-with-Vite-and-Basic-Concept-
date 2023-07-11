******  React Vite Project SetUP ******
***************************************
1.npm create vite
2.project name>React>JavaScript>
3.cd project name
4.npm install
4.npm run dev/npx vite (project run)
5.Local:   http://127.0.0.1:5173/

6.npm run build / npx vite build (for production)


*** Webpack and Vite hosse asset bundler Tool, ja developer level theke javaScript , css, html etc file k
    production er jonno bundle kore dey 

***Vite hosse webpake er akta alternative solution 
React Js e amra component architecture e  project kori, project korar somoy onek gulu soto soto 
javascript,css,file hoi, jegulu k asset bundler production level er jonno jototuku dorkar ta refine kore akta bundle toiri kore , a e bundle toiri kaj ta  kore webpack & vite , webpack er kisu limitation ase ja Vite overcome korese, and vite onek fast . 
CRA/create-react-app, diye app create korle by default webpack peye jai .
in 2023 Vite is best for build react app  

*** Public: application er je jinish gulu user publicly access korte parbe segulu: image, front, css 
            favIcon, 

***src : code korar jaiga hosse src/source 

    *** assets folder: je images, css gulu React code e JSX er vitor use kora hoi segulu stay here .

1. component folder: all component file stay here, component file er extension e .jsx likhbo. 

2. helper folder: form validation, toast message diya, alert diya ,API call kora, conversion kora arokom 
        soto soto helper file stay here. helper ba utility file er jonno extension .js likhbo jate easily
        identify kora jai. function related file stay here 

3. pages folder: all page stay here, Homepage, about page, contact page etc.  it also component file ,
 so file extension .jsx  

4. route folder: Routing link file stay here 

main.jsx : hosse actually main/initial component, application jokhon at first load hoi, tokhon first hit 
          kore  main.jsx file e. initially jodi kono file load korar dorkar hoi, jemon javaScript, css ja
          entire the application r kokhonoi load korbo na akberi korbo sei jonno main.jsx file e rekhe dibo. bootstrap,taiwindcss .  jate application create hoyer sate sei file load hoye jabe. 
        *** npm i bootstrap

App.jsx : main.jsx theke application er flow ta jai App.jsx file e.


** create function component vs code command : rsc , rfc


*** JSX hosse react er template engine. JSX er vitor javaScript likhar jonno curly { } use korte hoi
    and curly bracket {} er vitor javaScript likhte hoi



*** conditional rendering = ternary operator =>     marks >= 80? "Passed" : "Fail" 
        marks jodi 80 theke boro ba soman hole Passed R na hole Fail


** Rendering means: view ta je amder output disse ba view ta je toiri hosse ba condition apply hoye je 
 akta output astese , tar a e executoin tai hosse rendering. a e execution ta akhane react completely 
 browser er modhe hosse , je karone amra ata ke Client side rendering boli. R ata jodi Server e hoto 
 tahole ata k amra boltam server side rendering


 

*** Immediately invoked functin:  immediately invoked means tatkhonic execute hoya. orthat je function ta
    tatkhonic vabe execute hoi setai immediately invoked function. JSX er vitor likha hoi.
    syntax: {
        ( ()=>{} )()
    }


**** Looping by map() : 

    let listItem=['A','B','C','D'];
    <ul>
            {   //listItem theke akta akta kore item(eachItem) asbe
                listItem.map((eachItem)=>{

                     return <li key="">{eachItem}</li>

                })
            }
    </ul>


*** Logical && operator : only jodi amra akta decision pai, aktai condition and statement pai seketre,
              if--else use kore, but  amra if--else er poriborte = logical && use kori
              syntax: jodi true hoi Dashboard dekhabe R false hole Dashboard dekhabe na. ak line er code  

              let isLogin=true /false   
              {isLogin && <button>Dashboard</button> }

 



//**** Sumit vai class: time:25:00 minite ****//

*** React Element k change kora jai na , jodi change korte hoi notun kore toiri korte hoi 
    DOM Element k change kora jai

    React er Component change kora jai



Props: hosse simple javaScript object. Parent component theke Child component e data send kora hoi 
        props er madhome and child component er parameter e props likhte hoi data receive korar jonno



Event: React e onClick likhte hoi, onclick likhle bujbe na case onclick html attribute .
        onClick hosse EventListener, browser e user jodi button e click kore tahole se kotha sunbe and
        kaj korbe. JSX er vitor onClick e function er reference nam ta dilei hoi , parenthesis dite hobe
        na, dile vul hobe karan function ti bar bar call hote thakbe. html event er moto React event kaj
        kore na React event kaj kor SyntheticEvent, html event er upor akta wrapper hosse synthetic, ja
        react nijer moto kore toiri kore DOM manupulate kore .

        function handleClick(){
            document.write("Hello Event")
        }
       <button onClick={handleClick}>Event</button>// React syntax,   

       //************************//
        ** e.target = e-event , target-hosse je event er upor user click kore seta.
          form er default behaviar hosse kono kisu submit korle browser e automatic ta reload nei.
          form er a e default behaviar ta prevent/porihar korar jonno preventDefault() function use kori. 
          a e preventDefault() function ta thake event object er vitor .

          e.target.preventDefault(); ata likle brower r re-load nibe na. 

          jokhoni amra kono event er upor kaj kori callback function e automatic vabe event ta parameter
          madhome event pass hoye jai  

        function handleClick2(text){ //text parameter data onClick er data receive korse
             document.write(text)
        }

         <button onClick={
                () => handleClick2('this is dat passing by function parameter')
            }>
                parameter event
        </button>


     ****<button onClick={handleClick()}>Event</button> //html syntax, so react er Event e  function name 
        er por parenthesis () use kora jabe na, kore bar bar call hotei thakbe.



**** javaScript e jekono 2ta word camelCase likhte hoi= onClick, className 



