export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            id="initialInvestment"
            name="initialInvestment"
            value={userInput.initialInvestment}
            onChange={(event) => onChange(event)}
            required
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Years</label>
          <input
            type="number"
            id="annualInvestment"
            name="annualInvestment"
            value={userInput.annualInvestment}
            onChange={(event) => onChange(event)}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            id="expectedReturn"
            name="expectedReturn"
            value={userInput.expectedReturn}
            onChange={(event) => onChange(event)}
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={userInput.duration}
            onChange={(event) => onChange(event)}
            required
          />
        </p>
      </div>
    </section>
  );
}
