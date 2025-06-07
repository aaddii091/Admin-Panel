<template>
  <div
    class="w-[578px] h-[416px] rounded-[6px] border-0 flex flex-col drop-shadow-xs mt-10 mb-14 bg-[#F5F5F5]"
  >
    <!-- Top stroke bar :class="stroke"-->
    <div class="h-[6px] w-full rounded-t-[6px]" :class="stroke"></div>

    <!-- Header Section -->
    <div
      class="flex flex-col w-full h-[88px] justify-between items-start px-6 py-4 gap-y-2 bg-[#E5E5E5]"
    >
      <div class="text-[#262626] text-[20px] font-bold">{{ label }}</div>
      <div class="text-[14px] text-[#262626] font-normal">{{ labelDescription }}</div>
    </div>

    <!-- Body Section -->
    <div class="flex flex-col w-full justify-between px-4 gap-y-8">
      <div class="flex flex-col items-start mt-4 mx-2 gap-y-6">
        <!-- Assigned By -->
        <div class="flex gap-x-2">
          <!-- svg icon -->

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
              stroke="#141B34"
              stroke-width="1.5"
            />
            <path
              d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>

          <h2 class="text-[#404040] text-[16px] font-medium">Assigned By: {{ assignedBy }}</h2>
        </div>

        <!-- Estimated Time -->
        <div class="flex gap-x-2">
          <!-- svg icon -->

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M9 9L13.0001 12.9996M16 8L11 13"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h2 class="text-[#404040] text-[16px] font-medium">
            Estimated Time: {{ formattedTime }}
          </h2>
        </div>

        <!-- Due Date -->
        <div class="flex gap-x-2">
          <!-- svg icon -->

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 2V4M6 2V4"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 17L9.99999 13.3472C9.99999 13.1555 9.86325 13 9.69458 13H9M13.6297 17L14.9842 13.3492C15.0475 13.1785 14.9128 13 14.7207 13H13"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 8H18"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h2 class="text-[#404040] text-[16px] font-medium">Due On {{ formattedDate }}</h2>
        </div>

        <!-- Buttons -->
        <div class="flex w-full justify-between">
          <div class="flex">
            <button
              type="button"
              :disabled="loading"
              class="buttonTestCard w-[78px] h-[38px] cursor-pointer rounded-full border border-primary border-[0.15vw] text-[16px] font-medium text-primary transition hover:bg-white hover:bg-opacity-50 hover:bg-opacity-90 disabled:opacity-50 flex items-center justify-center"
            >
              {{ loading ? 'Signing in...' : 'Learn More' }}
            </button>
          </div>

          <div class="flex">
            <button
              type="button"
              :disabled="loading"
              class="buttonTestCard w-[78px] h-[38px] cursor-pointer rounded-full border border-primary bg-primary text-[16px] font-normal text-white transition hover:bg-opacity-90 disabled:opacity-50 flex items-center justify-center"
            >
              {{ loading ? 'Signing in...' : props.actionButton }}
            </button>
          </div>
        </div>
      </div>
      <!-- <ul class="flex w-[530px] justify-around text-[#404040] text-[14px] font-medium">
        <li
          class="progress-step-box flex flex-col items-center"
          :class="{ 'text-primary': activeStep >= 1 }"
        >
          <div>
            <p
              class="progress-icon list-one border-[0.3vh] text-[#6B7280]"
              :class="{
                'bg-primary text-[#6B7280] border-primary': activeStep >= 1,
                'text-[#6B7280]': activeStep < 1
              }"
            >
              1
            </p>
          </div>
          <p>Take Test</p>
        </li>
        <li class="progress-step-box flex flex-col items-center">
          <div>
            <p class="progress-icon list-two text-[#6B7280] border-[0.3vh]"
            :class="{
                'bg-primary text-[#6B7280] border-primary': activeStep >= 1,
                'text-[#6B7280]': activeStep < 1
              }">2</p>
          </div>
          <p>Report Generation</p>
        </li>
        <li class="progress-step-box flex flex-col items-center">
          <div>
            <p
              class="progress-icon list-three text-[#6B7280] border-[0.3vh]"
              :class="{
                'bg-primary text-[#6B7280] border-primary': activeStep >= 1,
                'text-[#6B7280]': activeStep < 1
              }"
            >
              3
            </p>
          </div>
          <p>Report Available</p>
        </li>
      </ul> -->

      <!-- <div class="container flex justify-center align-center">
        <div class="steps fles justify-center align-center">
          <span class="circle active">1</span>
          <span class="circle">2</span>
          <span class="circle">3</span>
          <div class="progress-bar">
            <span class="indicator"></span>
          </div>
        </div> -->
        <!-- <div class="buttons">
          <button id="prev" disabled>Prev</button>
          <button id="next">Next</button>
        </div> -->
      <!-- </div> -->
       <div class="stepper-wrapper text-[#404040] text-[16px] font-medium">
      <div class="stepper-item completed">
        <div class="step-counter active">1</div>
        <div class="step-name">Take Test</div>
      </div>
      <div class="stepper-item completed">
        <div class="step-counter">2</div>
        <div class="step-name">Report Generation</div>
      </div>
      <div class="stepper-item">
        <div class="step-counter">3</div>
        <div class="step-name">Report Available</div>
      </div>
      <!-- <div class="stepper-item">
        <div class="step-counter">4</div>
        <div class="step-name">Forth</div>
      </div> -->
    </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({
  name: 'TestCard'
})

const props = defineProps({
  label: String,
  labelDescription: String,
  assignedBy: String,
  estimatedMinutes: Number,
  assignedDate: Date,
  description: String,
  stroke: String,
  actionButton: String,
  // activeStep: {
  // type: Number,
  // default: 1
// }
})

// Format count to always show as 2 digits (e.g., 03, 07, 10)
const formattedTime = computed(() => {
  const hours = Math.floor(props.estimatedMinutes / 60)
  const minutes = props.estimatedMinutes % 60

  if (hours > 0 && minutes > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ${minutes} minute${minutes > 1 ? 's' : ''}`
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''}`
  } else {
    return `${minutes} minute${minutes > 1 ? 's' : ''}`
  }
})
// String(props.count).padStart(2, '0'));

const formattedDate = computed(() => {
  return new Date(props.assignedDate).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
})

//DOM Elements
const circles = document.querySelectorAll(".circles"),
progressBar = document.querySelector(".indicator"),
buttons = document.querySelectorAll("button");

let currentStep = 1;

// function that updates the current step and updates the DOM
const updateSteps = (e) => {
  //update current step based on the button clicked
  currentStep = e.target.id === "next" ? ++currentStep : --currentStep; 

//loop through all circles and remove "active" class based on their index and current step
  circles.forEach((circle, index) => {
    circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
});

  //update progress basr width based on current step
  progressBar.style.width = `${((currentStep - 1) / (circles.length -  1))}` //100%}%

  //check if the current step is last step or first step and disable corresponding buttons
  if(currentStep == circles.length){
    buttons[1].disabled = true;
   } else if(currentStep === 1){
    buttons[0].disabled = true;
   }else{
    buttons.forEach ((button) => (button.disabled = false));
   }
}

//Add click event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener("click", updateSteps);
});
</script>

<style scoped>
.buttonTestCard {
  width: 136px;
}

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  max-width: 400px;
  width: 100%;
  /* background-color: grey; */
}

.container .steps{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.steps .circle {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  color: #999;
  font-size: 22px;
  font-weight: 500;
  border-radius: 50%;
  background: #fff;
  border: 4px solid #e0e0e0;
  transition: all 200ms ease;
  transition-delay: 0s;
}

.steps .circle.active{
  transition-delay: 100ms;
  border-color: #4070f4;
  color: #4070f4;
}
.steps .progress-bar{
  position: absolute;
  height: 4px;
  width: 100%;
  background: #e0e0e0;
  z-index: -1;
}

.progress-bar .indicator{
  position: absolute;
  height: 100%;
  width: 0%;
  background: #4070f4;
  transition: all 300ms ease;
}

.container .buttons {
  display: flex;
  gap: 20px;
}

.buttons button {
  padding: 8px 25px;
  background: #4070f4;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  transition: all 200ms linear;
}

.buttons button:active{
  transform: scale(0.97);
}

.buttons button:disabled{
  background: #87a5f8;
  cursor: not-allowed;
}

/* .progress-icon {
  background-color: #f9fafb;
  width: 28px;
  height: 28px;
  border-radius: 24px;
  display: grid;
  place-items: center;
  border-color: #e5e7eb;
  position: relative;
}

.progress-icon::after {
  content: '';
  position: absolute;
  width: 177px;
  height: 3px;
  background-color: #e5e7eb;
  right: 26px;
  z-index: 0;
} */

.list-one::after {
  width: 0px;
}

.progress-step-box {
  width: 177.6px;
}

.stepper-wrapper {
  /* font-family: Arial; */
  /* margin-top: 50px; */
  /* font-weight: 400; */
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.stepper-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 12px;
  }
}

.stepper-item::before {
  position: absolute;
  content: "";
  border-bottom: 2px solid #ccc;
  width: 100%;
  top: 12px;
  left: -50%;
  z-index: 2;
}

.stepper-item::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #ccc;
  width: 100%;
  top: 12px;
  left: 50%;
  z-index: 2;
}

.stepper-item .step-counter {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 100%;
  border: 3px solid #E5E7EB;
  background: #ffffff;
  margin-bottom: 6px;
}

.stepper-item.active {
  font-weight: bold;
}

.stepper-item.completed .step-counter {
  color: #ffffff;
  background-color: #6366F1;
  border: 3px solid #6366F1;
}

.stepper-item.completed::after {
  position: absolute;
  content: "";
  border-bottom: 3px solid #6366F1;
  width: 100%;
  top: 12px;
  left: 50%;
  z-index: 3;
}

.stepper-item:first-child::before {
  content: none;
}
.stepper-item:last-child::after {
  content: none;
}
</style>
