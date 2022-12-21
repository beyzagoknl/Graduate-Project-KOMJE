import React, { useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./result.css";
import { useResult } from "../../hooks/useResult";
import BarChart from "../../components/BarChart/BarChart";
import PieChart from "../../components/PieChart/PieChart";
import Spinner from "../../components/Spinner/Spinner";
import { ResultContext } from "../../contexts/ResultContext";
import Accordion from "../../components/Accordion/Accordion";

const Result = () => {
  const { getResult } = useResult();
  const { result } = useContext(ResultContext);
  useEffect(() => {
    getResult.perform();

    return () => {
      getResult.cancel();
    };
  }, []);

  const pieLabel = ["Attending"];

  return (
    <>
      {getResult.isLoading && <Spinner />}

      <div className="containerResult">
        <div className="guests-count-box">
          <h1>Total result</h1>
          <hr />
          <div className="guess-count">
            <p className="paragraph-app">
              Guests number: {result?.attending || 0} /{" "}
              {result?.totalResponse || 0}
            </p>
            <p className="paragraph-app">
              Attending Percentage: {result?.attendingPercentage || 0}%{" "}
            </p>
          </div>
        </div>

        <div>
          {result && (
            <Accordion title="Guests List">
              <div className="guest-list">
                <table width="100%">
                  <tbody>
                    {result.guestsInformation?.map((guest) => {
                      return (
                        <tr key={guest.guestName}>
                          <td className="guest-name">{guest.guestName}</td>
                          <td className="guest-email">{guest.guestEmail}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Accordion>
          )}
        </div>
        {result ? (
          <>
            <div className="result-chart-component">
              <PieChart
                text="Attending chart"
                labels={pieLabel}
                numberOfAttending={result?.totalResponse}
                data={[result?.attending, result?.notAttending]}
              />
            </div>

            <div
              className={
                result?.chartArray.length > 3 ? "flex-bar-chart-section" : null
              }
            >
              {result?.chartArray?.map((chart, indx) => (
                <div className="result-chart-component" key={indx}>
                  <BarChart
                    text={result.subjectArray[indx]}
                    labels={chart.labels}
                    numberOfAttending={result.attending}
                    data={chart.data}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>
            <p className="no-result-msg">
              <span className="sorry-span">Sorry !.. </span>
              <br></br>It seems that no one has answered your invitation yet.
            </p>
          </div>
        )}
      </div>
    </>
  );
};
export default Result;
