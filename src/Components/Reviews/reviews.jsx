import GoogleReviewsWidget from "google-reviews-widget";
import '../../Styling/reviews.scss'

function Reviews() {
  return (
    <div className="reviews">
      <header>
        <h1 className="vos">Voices of Satisfaction</h1>
      </header>
      <GoogleReviewsWidget instanceId="QXJYYdTRxzfy5nVR1R2v" className='riv'/>
    </div>
  )
}

export default Reviews