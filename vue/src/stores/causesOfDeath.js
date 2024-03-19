import { ref, onMounted } from 'vue'
const causes = ref('')

async function getCauses() {
  let res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
  let data = await res.json()
  let leadingCause = data.leading_cause.value
  console.log(leadingCause)
}
