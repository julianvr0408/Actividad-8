import Title from "../elements/titulos";

const Home=()=>{
    return(
        <div className="container py-5">
            <div className="row">
                <Title text={"home"}/>
                <div className="col-md-9">
                        <p> Los Simpson -en inglés: The     Simpsons- es una serie estadounidense de comedia en formato de animación, creada por Matt Groening para Fox Broadcasting Company y emitida en varios países del mundo.
                        La serie es una sátira de la sociedad estadounidense que narra la vida y el día a día de una familia de clase media de ese país -cuyos miembros son Homero, Marge, Bart, Lisa y Maggie Simpson- que vive en un pueblo ficticio llamado Springfield.

                    </p>
                </div>
                <div className="col-md-3">
                    <img src="https://th.bing.com/th/id/R.1f444557f89772e5c36b883e5af3c384?rik=2WjOg2naVDyZmA&riu=http%3a%2f%2fthoughtcatalog.com%2fwp-content%2fuploads%2f2014%2f02%2fsimpsons-family-couch.png&ehk=0bS5EiUJmj9xhUwNwWAtcrWfuWeiE3%2bd%2bEdyw5Yegpw%3d&risl=&pid=ImgRaw&r=0" alt="The Family simpson" className="img-fluid" />
                </div>
            </div>
           
        </div>
    )
}
export default Home;