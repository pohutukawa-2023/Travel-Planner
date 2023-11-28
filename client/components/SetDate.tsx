function SetDate() {
  return (
    <div>
      <form>
        <label htmlFor="departureDate">Departure Date:</label>
        <input type="date" id="departureDate" name="departureDate" />
        <label htmlFor="returnDate">Return Date:</label>
        <input type="date" id="returnDate" name="returnDate" />
      </form>
    </div>
  )
}

export default SetDate
