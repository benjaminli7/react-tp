export default function Home(){
    return(
        <div className="container">
            <h1>Projet TP - React</h1>
            <p>Pour le TP, j'ai utilisé l'API de CheapShark et une API de convertisseur de devises.</p>
            <p>J'ai utilisé l'api de CheapShark pour afficher les meilleurs deals du moment sur des jeux et le convertisseur de devise sert à changer le devise des prix en fonction de la devise choisie par l'utilisateur.</p>
            <p>La devise par défaut est en USD.</p>

            <div className="cards">
                <div className="card text-center" style={{width: 18 +'rem'}}>
                    <img className="card-img-top apiImg" src="https://www.cheapshark.com/img/logo_image.png" alt="Card_image_cap" />
                    <div className="card-body">
                        <h5 className="card-title">CheapShark</h5>
                        <a href="https://apidocs.cheapshark.com/" className="btn btn-primary">Docs</a>
                    </div>
                    </div>            
                    <div className="card text-center" style={{width: 18 +'rem'}}>
                    <img className="card-img-top apiImg" src="https://www.currencyconverterapi.com/images/logo.png" alt="Card_image_cap" />
                    <div className="card-body">
                        <h5 className="card-title">Currency Converter</h5>
                        <a href="https://www.currencyconverterapi.com/docs" className="btn btn-primary">Docs</a>
                    </div>
                </div>           
            </div>
        </div>
    )
}