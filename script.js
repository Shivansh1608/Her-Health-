function predict() {
  const selectedSymptoms = Array.from(document.querySelectorAll('input[name="symptom"]:checked'))
    .map(el => el.value);

  let result = "";

  if (selectedSymptoms.includes("irregularPeriods") && selectedSymptoms.includes("weightGain") && selectedSymptoms.includes("facialHair")) {
    result = "⚠️ You may have signs of PCOS.";
  } else if (selectedSymptoms.includes("pelvicPain") && selectedSymptoms.includes("irregularPeriods")) {
    result = "⚠️ Symptoms suggest possible Endometriosis.";
  } else if (selectedSymptoms.includes("hotFlashes") && selectedSymptoms.includes("moodSwings")) {
    result = "ℹ️ You may be showing signs of Menopause.";
  } else if (selectedSymptoms.length === 0) {
    result = "❗ Please select at least one symptom.";
  } else {
    result = "✅ No strong signs detected. You seem okay.";
  }

  document.getElementById("result").innerText = result;
}
function predict() {
  const selectedSymptoms = Array.from(document.querySelectorAll('input[name="symptom"]:checked'))
    .map(el => el.value);

  let condition = "";
  let confidence = "";
  let advice = "";

  if (selectedSymptoms.includes("irregularPeriods") && selectedSymptoms.includes("weightGain") && selectedSymptoms.includes("facialHair")) {
    condition = "Polycystic Ovary Syndrome (PCOS)";
    confidence = "85%";
    advice = "Consult a gynecologist. Early detection and lifestyle changes help manage PCOS.";
  } else if (selectedSymptoms.includes("pelvicPain") && selectedSymptoms.includes("irregularPeriods")) {
    condition = "Endometriosis";
    confidence = "80%";
    advice = "Schedule an ultrasound scan with a gynecologist.";
  } else if (selectedSymptoms.includes("hotFlashes") && selectedSymptoms.includes("moodSwings")) {
    condition = "Menopause Symptoms";
    confidence = "75%";
    advice = "Consider hormone balance consultation.";
  } else if (selectedSymptoms.length === 0) {
    alert("❗ Please select at least one symptom.");
    return;
  } else {
    condition = "No strong signs detected.";
    confidence = "60%";
    advice = "Stay healthy. Regular checkups are still advised.";
  }

  // Save to localStorage
  localStorage.setItem("condition", condition);
  localStorage.setItem("confidence", confidence);
  localStorage.setItem("symptoms", selectedSymptoms.join(", "));
  localStorage.setItem("advice", advice);

  // Redirect to report page
  window.location.href = "results.html";
}
