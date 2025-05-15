import Title from "../elements/Title";

const Home = () => {
  return (
   <div className="text-light bg-dark vh-100">
     <div className="container py-5">
        <div className="row">
          <Title text={"Home"}/>
            <div className="col-md-9">
                 <p>Los simpson -en ingles: the simpsons- es una serie estadounidense de comedia en formatode animacion,
                    creada por Matt Groening para fox company y emitida en varios paises del mundo.
                     la serie es una satira de la sociedad estadounidense que narra la vida y el dia a dia de una familiade clase
                     media de ese pais -cuyos miembros son homer, marge, baart, lisa y maggie simpson-que vive en un pueblo ficticio llamado springfield.

                 </p>
             </div>
             <div className="col-md-3">
                 <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwXckapR65CXkl5xEovdcFYgAQvO1oP23gx726yiXfLqo9iTLq7yFhbOkUlvKevT0ALVBB7fI0U7Abggf2sDibhDjJMG70y00ts0f9_Q"
                 alt="the family simpson" className="img-fluid"/>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Home;