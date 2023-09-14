import React from 'react'

export default function Events() {

const imageSize = {
    maxHeight: "300px",
    objectFit: "cover",
    };

  return (
    <div className='mx-3 bg-light'>
        <div className="row">
            {/* Left side */}
            <div className="col-md-6 p-5">
                <h2>रक्तदान शिविर (80 यूनिट)</h2>
                <p>
                मई के 28 तारीख को हमारे प्रदेश के एक अद्वितीय रक्तदान शिविर का आयोजन किया गया था, जिसमें हमने समाज के लिए महत्वपूर्ण रक्तदान के माध्यम से नागरिकों के स्वास्थ्य का समर्पण किया। यह आयोजन न केवल विभागीय स्वास्थ्य सेवाओं के लिए एक महत्वपूर्ण योगदान था, बल्कि यह एक सामुदायिक दृष्टिकोण भी रखता है जो हमारे समुदाय के अद्वितीय आदर्शों को प्रकट करता है।
                <br/>
                <br/>
                इस रक्तदान शिविर में कुल 80 यूनिट रक्तदान किए गए थे, जिनसे हमने कई महत्वपूर्ण जीवनों को बचाने में मदद की। इसके साथ ही, हमने रक्तदाताओं की व्यक्तिगत सेवा के लिए आभार व्यक्त किया, जो इस सशक्त प्रयास में हमारे साथ थे।
                रक्तदान का महत्व हम सभी जानते हैं, क्योंकि एक यूनिट रक्त दान से कई जीवनों को नया जीवन मिलता है। यह आयोजन हमारे समुदाय में जागरूकता फैलाने का भी एक माध्यम है, क्योंकि हम अपने स्वास्थ्य से जुड़े जिम्मेदारियों को समझते हैं और उन्हें एक नई दिशा में आगे बढ़ने के लिए प्रोत्साहित करते हैं।
                <br/>
                <br/>
                इस आयोजन के माध्यम से हमने अपने समुदाय के सदस्यों को साझा दिलाया कि हम सभी एक-दूसरे की चिंता करते हैं और एक दूसरे के साथ आपासी सहयोग और समर्थन करते हैं। यह एक मानविक संदेश है जो हमारे समुदाय के सामाजिक और सामुदायिक विकास के प्रति हमारे प्रतिबद्धता को दर्शाता है।
                </p>
            </div>

            {/* Right side */}
            <div className="col-md-6 p-1">
        <div className="row py-3">
            <div className="col-md-4">
                <img src="assets/images/bd1.jpg" alt="" className="img-fluid m-1" style={imageSize}/>
            </div>
            <div className="col-md-4">
                <img src="assets/images/bd2.jpg" alt="" className="img-fluid m-1" style={imageSize}/>
            </div>
            <div className="col-md-4">
                <img src="assets/images/bd3.jpg" alt="" className="img-fluid m-1" style={imageSize}/>
            </div>
            <div className="col-md-4">
                <img src="assets/images/bd4.jpg" alt="" className="img-fluid m-1" style={imageSize}/>
            </div>
            <div className="col-md-4">
                <img src="assets/images/bd5.jpg" alt="" className="img-fluid m-1" style={imageSize}/>
            </div>
            <div className="col-md-4">
                <img src="assets/images/bd6.jpg" alt="" className="img-fluid m-1" style={imageSize}/>
            </div>
                       
      </div>
    </div>
        </div>
    </div>
  )
}
