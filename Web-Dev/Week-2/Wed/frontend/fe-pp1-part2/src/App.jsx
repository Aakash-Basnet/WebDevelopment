import "./App.css";
import BoxColor from "./BoxColor";
import CreditCard from "./CreditCard";
import Greetings from "./Greetings";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div style={{ display: "flex", justifyContent: "center", padding: "20px", gap: "20px" }} >
      <CreditCard
        type="Visa"
        number="1234 5678 9012 3456"
        expirationMonth="12"
        expirationYear="25"
        bank="Bank of America"
        owner="John Doe"
        picture="/path/to/credit-card-image.jpg"
        bgColor="#D4AF37"
        color="#333"
      />
      <CreditCard
  type="Master Card"
  number="0123456789010993"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222"
/>
<CreditCard
  type="Visa"
  number="0123456789016982"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white"
/>
</div>
<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />
<div style={{ gap: "20px"}}>
<Greetings lang="de" name="Ludwig" />
<Greetings lang="fr" name="François" />
</div>
    </div>
  );
}

export default App;

