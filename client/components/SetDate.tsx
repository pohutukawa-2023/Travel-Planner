function SetDate() {
  return (
    <div>
      <form>
        <label htmlFor="departureDate">From:</label>
        <input type="date" id="departureDate" name="departureDate" />
        <label htmlFor="returnDate">To:</label>
        <input type="date" id="returnDate" name="returnDate" />
      </form>
    </div>
  )
}

export default SetDate
