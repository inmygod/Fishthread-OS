import { useMemo, useState } from "react";

export default function SalePage() {
  const [customerName, setCustomerName] =
    useState("");

  const [customerPhone, setCustomerPhone] =
    useState("");

  const [weight, setWeight] =
    useState("");

  const [rate, setRate] =
    useState("");

  const [totalAmount, setTotalAmount] =
    useState("");

  const [error, setError] =
    useState("");

  const invoiceNumber =
    useMemo(() => {
      return `SI-${Date.now()}`;
    }, []);

  const calculatedAmount =
    Number(weight || 0) *
    Number(rate || 0);

  const handleSave = () => {
    if (!totalAmount.trim()) {
      setError(
        "মোট টাকা অবশ্যই দিতে হবে"
      );

      return;
    }

    setError("");

    alert(
      "বিক্রয় চালান সংরক্ষণ করা হয়েছে"
    );
  };

  return (
    <div
      style={{
        padding: 16,
      }}
    >
      <h1>নতুন বিক্রয়</h1>

      <p>
        চালান নং: {invoiceNumber}
      </p>

      <div>
        <label>
          Customer Name
        </label>

        <input
          value={customerName}
          onChange={(e) =>
            setCustomerName(
              e.target.value
            )
          }
        />
      </div>

      <br />

      <div>
        <label>
          Customer Phone
        </label>

        <input
          inputMode="numeric"
          value={customerPhone}
          onChange={(e) =>
            setCustomerPhone(
              e.target.value
            )
          }
        />
      </div>

      <br />

      <div>
        <label>
          Weight (KG)
        </label>

        <input
          inputMode="decimal"
          value={weight}
          onChange={(e) =>
            setWeight(
              e.target.value
            )
          }
        />
      </div>

      <br />

      <div>
        <label>
          Rate Per KG
        </label>

        <input
          inputMode="decimal"
          value={rate}
          onChange={(e) =>
            setRate(
              e.target.value
            )
          }
        />
      </div>

      <br />

      <div>
        <label>
          Calculated Amount
        </label>

        <input
          value={calculatedAmount}
          readOnly
        />
      </div>

      <br />

      <div>
        <label>
          Total Amount *
        </label>

        <input
          inputMode="decimal"
          value={totalAmount}
          onChange={(e) =>
            setTotalAmount(
              e.target.value
            )
          }
        />
      </div>

      <br />

      {error && (
        <p
          style={{
            color: "red",
          }}
        >
          {error}
        </p>
      )}

      <button
        onClick={handleSave}
      >
        বিক্রয় সংরক্ষণ
      </button>
    </div>
  );
}
