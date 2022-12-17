import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import { CurrencyContext } from "../context/currencies-context";

export default function Course({ course }) {
  const currency = React.useContext(CurrencyContext);

  const { title, img, price } = course;

  const contextPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.code,
  }).format(price * currency.conversionRate);

  //   Change Course Bg dep. on Cur
  const [courseBg, setCourseBg] = useState();
  useEffect(() => {
    if (currency.code === "USD") {
      setCourseBg("card-light");
    }
    if (currency.code === "EUR") {
      setCourseBg("card-accept");
    }
    if (currency.code === "GBP") {
      setCourseBg("card-danger");
    }
  }, [currency.code]);

  return (
    <li className={`card ${courseBg} mb-2`} style={{ width: 250 }}>
      <div className="card-header">{title}</div>
      <img src={img} alt="course img" style={{ height: "100%" }} />
      <p className="card-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aut
        dolorum fugiat asperiores velit, repudiandae quidem suscipit, doloremque
        ullam libero reprehenderit accusamus cupiditate laborum cumque similique
        aliquid, reiciendis vitae sit?
      </p>
      <div className="card-footer d-flex space-between">
        <h4>{contextPrice}</h4> <Button btnClass={"btn-success"} text={"BUY"} />
      </div>
    </li>
  );
}
