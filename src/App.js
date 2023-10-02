import './App.css';
import tambola from 'tambola';
import html2pdf from 'html2pdf.js';
import image from "./image.png"

function App() {

  // Function to check if two arrays are equal
  function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  }

  // Function to check if none of the inner arrays are the same
  function checkUniqueArrays(arr) {
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = i + 1; j < length; j++) {
        if (arraysAreEqual(arr[i], arr[j])) {
          return false; // Found two equal arrays, not unique
        }
      }
    }

    return true; // All arrays are unique
  }

  // Your code to generate 500 Tambola tickets
  let ticket = [];
  for (let i = 0; i < 501; i++) {
    let singleTicket = tambola.generateTicket(); // This generates a standard Tambola Ticket
    ticket.push(singleTicket);
  }

  // Check if none of the inner arrays in 'ticket' are the same
  const areArraysUnique = checkUniqueArrays(ticket);

  if (areArraysUnique) {
    console.log("All inner arrays in 'ticket' are unique.");
  } else {
    console.log("At least two inner arrays in 'ticket' are the same.");
  }
  const ticketNames = {
    1: "श्री",
    2: "ऊं",
    3: " 卐 ",
    4: "मंगल",
    5: "अरिहंत",
    6: "सिद्ध",
    7: "आचार्य",
    8: "उपाध्याय",
    9: "साधु",
    10: "सम्यक दर्शन",
    11: "सम्यक् ज्ञान",
    12: "सम्यक् चरित्र",
    13: "तारण",
    14: "श्री गढाशाह जी",
    15: "वीर श्री माता",
    16: "श्री निसई जी",
    17: " नदी वेतवा",
    18: "चंदन",
    19: "आरती",
    20: "केशरिया",
    21: "आत्मा",
    22: "मोक्ष",
    23: "श्री श्रवकाचार जी",
    24: "श्री मालारोहण जी",
    25: "श्री कमलबत्तीसी जी",
    26: "श्री पंडितपूजा जी",
    27: "श्री ज्ञानसमुचय सार जी",
    28: "श्री उपदेश शुद्धसार जी",
    29: "श्री त्रिभंगी सार जी",
    30: "श्री ममलपाहुड जी",
    31: "श्री चौबीस ठाणा जी",
    32: "श्री नाम माला जी",
    33: "श्री सुन्न स्वभाव जी",
    34: "श्री खातिका विशेष जी",
    35: "श्री सिद्ध स्वभाव जी",
    36: "श्री छद्ममस्त वाणी जी",
    37: "श्री आदि नाथ जी",
    38: "श्री अजीत नाथ जी",
    39: "श्री संभवनाथ जी",
    40: "श्री अभिनदंन नाथ जी",
    41: "श्री सुमति नाथ जी",
    42: "श्री पद्म प्रभु",
    43: "श्री सुपाशर्वर्नाथ नाथ जी",
    44: "श्री चंद्र प्रभु जी",
    45: "श्री पुश्वदंत जी",
    46: "श्री शीतल नाथ जी",
    47: "श्री श्रेयांश नाथ जी",
    48: "श्री वासुपूज्य जी",
    49: "श्री विमल नाथ जी",
    50: "श्री अनंतनाथ जी",
    51: "श्री धर्मनाथ जी",
    52: "श्री शांतिनाथ जी",
    53: "श्री कुंथुनाथ जी",
    54: "श्री अरहनाथ जी",
    55: "श्री मल्लिनाथ जी",
    56: "श्री मुनिसुब्रत जी",
    57: "श्री नभिनाथ जी",
    58: "श्री नेमीनाथ जी",
    59: "श्री पारसनाथ जी",
    60: "श्री महावीर जी",
    61: "श्री चंद्रबाला जी",
    62: "श्री राम जी",
    63: " सती सीता",
    64: "श्री कृष्ण",
    65: "श्री बाहुबली जी",
    66: "मुनि",
    67: "श्रावक",
    68: "अर्जिका",
    69: "दसलक्षण",
    70: "कषाय",
    71: "पाप",
    72: "द्रव्य",
    73: "तत्व",
    74: "देवगति",
    75: "घतिया कर्म",
    76: "तिर्यंच गति",
    77: "मनुष्य गति",
    78: "श्री नाभिराय जी",
    79: "श्री मरुदेवी",
    80: "वामादेवी",
    81: "चैत्यालय",
    82: "पंडित",
    83: "पुण्य",
    84: "चिंतन",
    85: "समता भाव",
    86: "सामायिक",
    87: "ध्यान",
    88: "उपवास",
    89: "उदम्बर",
    90: "परिग्रह",
  }
  const arrayToModify = ticket;

  // Function to replace numbers with key-value pairs of numbers and names
  function replaceNumbersWithNames(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      const innerArray = arr[i];
      const modifiedInnerArray = [];

      for (let j = 0; j < innerArray.length; j++) {
        const innerInnerArray = innerArray[j];
        const modifiedInnerInnerArray = [];

        for (let k = 0; k < innerInnerArray.length; k++) {
          const number = innerInnerArray[k];
          const name = ticketNames[number] || ""; // Use an empty string if the number is not found
          const nameWithNumber = `${number}: ${name}`; // Concatenate number and name
          modifiedInnerInnerArray.push({ number, name });
        }

        modifiedInnerArray.push(modifiedInnerInnerArray);
      }

      result.push(modifiedInnerArray);
    }

    return result;
  }


  const data = replaceNumbersWithNames(arrayToModify);

  // Output the modified array
  console.log(data, "data");

  console.log(ticket)
   // Function to generate and download the PDF
   function generateAndDownloadPdf() {
    // Define the HTML element to be converted to PDF
    const element = document.querySelector('.App'); // You may need to adjust the selector based on your HTML structure

    // Configuration for the PDF generation
    const pdfOptions = {
      margin: 10,
      filename: 'tambola_ui.pdf', // Name of the downloaded PDF file
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    // Generate the PDF
    html2pdf().from(element).set(pdfOptions).outputPdf((pdf) => {
      // Trigger the download
      pdf.save();
    });
  }
  // Call the generatePpt function when the component loads

  return (
    <>
      <div>
        <div className="App" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          {data.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: "flex", padding: "30px", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <span style={{ position: "absolute", left: "1%" }} >{rowIndex + 1}</span>
                <div style={{ position : "relative"}}>
                  <h3 className='watermark' style={{position : "absolute" ,fontSize :"7.5px" ,transform: "rotate(90deg)" , right : "-7.5%" , marginTop : "90px" }}>क्रिटेड बाय:- नमन जैन  S/O राजू सलैया अशोका गार्डन , भोपाल</h3>
              {row.map((subRow, subRowIndex) => (
                <div key={subRowIndex} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {subRow.map((cell, cellIndex) => (
                    <div style={{ position: "relative" }}>
                      {cell.number != 0 && <span style={{ position: "absolute", left: "2%", top: "5%", fontSize: "10px" }}>{cell.number}</span>}
                      <div key={cellIndex} style={{ border: "1px solid black", height: "8vh", width: "10vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <p style={{ fontSize: "13px" , fontWeight: "bold" }}>{cell.name}</p>
                      </div>
                      {cell.number != 0 && <div style={{ position: "absolute", width: "20px", height: "20px", right: "2%", bottom: "3%", fontSize: "12px", border: "1px black solid" }}></div>}
                    </div>
                  ))}

                </div>
              ))}
              

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
