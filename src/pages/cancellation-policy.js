import React from "react";
import Layout from "../components/Layout";

const CancellationPolicy = () => {
  return (
    <Layout>
      <div className="cancellationPolicy__content">
        <h1 className="cancellationPolicy__title">Cancellation Policy</h1>
        <div className="cancellationPolicy__list">
          <div className="cancellationPolicy__policy">
            <h3>For small group lessons:</h3>
            <p>
              Unfortunately missed group lessons cannot be rescheduled. However,
              if there is another group taking a similar lesson the same week,
              we will try our best to fit you in it. Otherwise, you can opt to
              pay an additional HK$600 to have a private lesson to learn the
              topics which you missed in the class. Please note that the length
              of that private lesson may last less than 2 hours.
            </p>
          </div>
          <div className="cancellationPolicy__policy">
            <h3>For 1-to-1 lessons:</h3>
            <p>
              Please inform us at least 24 hours before the lesson start time if
              you need to cancel or reschedule it. Forgetting to do so will
              result in the lesson being marked as missed in your attendance.
              Missed lessons cannot be rescheduled, which means payments for
              missed lessons are not reusable, refundable, or transferable.
            </p>
          </div>
          <div className="cancellationPolicy__policy">
            <h3>For 2-to-1 lessons:</h3>
            <p>
              Missed 2-to-1 lessons cannot be rescheduled. However, if both the
              students in the same group agree to cancel a particular lesson and
              inform us at least 24 hours before the lesson start time, that
              lesson can be rescheduled to another time or postponed one week.
            </p>
          </div>
          <div className="cancellationPolicy__policy">
            <h3>Expiration of 1-to-1 and 2-to-1 lessons:</h3>
            <p>
              Students need to finish their lessons within two months after
              payment.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CancellationPolicy;
