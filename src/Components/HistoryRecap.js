import React, { useState } from 'react';

const HistoryRecap = () => {
  const eventsData = [
    { year: "08-01-2017", description: "उत्तराखंड सांस्कृतिक एकता मंच की स्थापना हुई", color: "bg-light", highlightColor: "bg-success"  },
    { year: "23-09-2017", description: "पहला माता का जागरण", color: "bg-light", highlightColor: "bg-success"  },
    { year: "13-10-2018", description: "दूसरा माता का जागरण", color: "bg-light", highlightColor: "bg-success"  },
    { year: "08-04-2018", description: "रक्तदान शिविर I", color: "bg-light", highlightColor: "bg-success"  },
    { year: "25-01-2018", description: "मानेसर में उत्तराखंड दिवस मनाया गया", color: "bg-light", highlightColor: "bg-success"  },
    { year: "17-03-2019", description: "होली मिलन समारोह I", color: "bg-light", highlightColor: "bg-success"  },
    { year: "14-04-2019", description: "गुरुग्राम में स्वच्छता अभियान", color: "bg-light", highlightColor: "bg-success"  },
    { year: "05-10-2019", description: "तीसरा माता का जागरण", color: "bg-light", highlightColor: "bg-success"  },
    { year: "10-11-2019", description: "मानेसर में उत्तराखंड स्थापना दिवस समारोह", color: "bg-light", highlightColor: "bg-success"  },
    { year: "02-10-2022", description: "चौथा माता का जागरण", color: "bg-light", highlightColor: "bg-success"  },
    { year: "19-02-2023", description: "नई आम सभा का चुनाव", color: "bg-light", highlightColor: "bg-success"  },
    { year: "07-03-2023", description: "होली मिलन समारोह II", color: "bg-light", highlightColor: "bg-success"  },
    { year: "28 05-2023", description: "रक्तदान शिविर II", color: "bg-light", highlightColor: "bg-success"  },
    
  ];

  const [events, setEvents] = useState(
    eventsData.map(event => ({ ...event, arrowClass: '', textColor: '' }))
  );

  const handleEventHover = (index) => {
    const updatedEvents = events.map((event, i) => {
      if (i === index) {
        return { ...event, color: event.highlightColor, textColor: "text-white", arrowClass: 'arrow-show' };
      } else {
        return { ...event, color: "bg-light", textColor: "", arrowClass: '' };
      }
    });

    setEvents(updatedEvents);
  };

  const halfLength = Math.ceil(events.length / 2);
  const leftColumn = events.slice(0, halfLength);
  const rightColumn = events.slice(halfLength);

  return (
    <div className="container glance-div">
      <div className="row">
        <h1 className='p-2'>घटनाक्रम - एक नजर में</h1>
        <div className="col-md-6">
          <div className="event-container">
            {leftColumn.map((event, index) => (
              <div
                key={index}
                className={`event-item ${event.color} ${event.textColor}`}
                onMouseEnter={() => handleEventHover(index)}
              >
                <h3 className="year">{event.year}</h3>
                <p className="description">{event.description}</p>
                <div className={`arrow ${event.arrowClass}`}>&rarr;</div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <div className="event-container">
            {rightColumn.map((event, index) => (
              <div
                key={index + halfLength}
                className={`event-item ${event.color} ${event.textColor}`}
                onMouseEnter={() => handleEventHover(index + halfLength)}
              >
                <div className={`arrow ${event.arrowClass}`}>&rarr;</div>
                <h3 className="year">{event.year}</h3>
                <p className="description">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryRecap;