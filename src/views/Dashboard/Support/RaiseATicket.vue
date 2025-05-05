<reference path="path/types.d.ts" />
<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import InputGroup from '@/components/Auths/InputGroup.vue'
import { ref } from 'vue';
import TextGroup from '@/components/Auths/textGroup.vue';
import MediaGroup from '@/components/Auths/MediaGroup.vue';

defineOptions({
  name: 'Support-tab-raise-a-ticket'
});

const name = ref()
const paragraphArea = ref()
const fileUploadArea = ref()
</script>

<template>
  <DefaultLayout>
    <div class="mb-4">
    </div>
    <div class="support-screen bg-white text-black py-7 pt-6 pb-6 dark:bg-boxdark flex flex-col items-center justify-center">
      <h2 class="font-bold text-center text-[24px] leading-[36px] text-[#171717] pl-7 dark:text-white pt-10">Raise A Support Ticket</h2>

      <div class="support-form flex flex-col mt-6">
        <div>
            <InputGroup
            label="Title"
            type="text"
            placeholder="Give a short title here"
            v-model="name"
            isTextArea
            required
        >
        <template #left>
            
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 20.2499H4.5C4.30109 20.2499 4.11032 20.1709 3.96967 20.0302C3.82902 19.8896 3.75 19.6988 3.75 19.4999V15.3105C3.75 15.2121 3.7694 15.1145 3.80709 15.0235C3.84478 14.9325 3.90003 14.8499 3.96967 14.7802L15.2197 3.53022C15.3603 3.38956 15.5511 3.31055 15.75 3.31055C15.9489 3.31055 16.1397 3.38956 16.2803 3.53022L20.4697 7.71956C20.6103 7.86021 20.6893 8.05097 20.6893 8.24989C20.6893 8.4488 20.6103 8.63956 20.4697 8.78022L9 20.2499Z" stroke="#3C50E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.75 6L18 11.25" stroke="#3C50E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.2501 20.2499H9.00013L3.79785 15.0476" stroke="#3C50E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </template>
        </InputGroup>
    </div>
    <div class="mt-4">
            <TextGroup
            label="What happened"
            type="text"
            placeholder="I encountered a bug in Test submission where..."
            v-model="paragraphArea"
            Textarea
            required
        >
        </TextGroup>
    </div>
    <div class="mt-4">
            <MediaGroup
            label="Please add a screenshot if you have one"
            type="file"
            placeholder="Upload a File"
            v-model="fileUploadArea"
          >
          <div class="UploadTextFileSpecificationIcon text-center gap-y-2">
            
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 18V5.775L6.6 9.675L4.5 7.5L12 0L19.5 7.5L17.4 9.675L13.5 5.775V18H10.5ZM3 24C2.175 24 1.46875 23.7063 0.88125 23.1188C0.29375 22.5312 0 21.825 0 21V16.5H3V21H21V16.5H24V21C24 21.825 23.7063 22.5312 23.1188 23.1188C22.5312 23.7063 21.825 24 21 24H3Z" fill="#1D1B20"/>
            </svg>

            <div class="UploadTextFileSpecification">
              <div class="uploadText flex gap-x-1">
              <div class="FirstHalfFileInputText font-semibold">Upload a File</div>
              <div class=" font-semibold SecondHalfFileInputText">or drag and drop</div> 
            </div>
            <div class="FileSpecification">PNG, JPG, GIF up to 5MB</div>
            </div>
          </div>
          </MediaGroup>
    </div>
      </div>
      <div class="support-container flex gap-x-90 items-center justify-center h-full mx-auto sm:max-w-[780px] w-full">
        <div class="mb-5 mt-2">
            <router-link to="/support/raiseATicket">
                <button
                type="submit"
                :disabled="loading"
                class="flex gap-x-2 w-sm cursor-pointer rounded-full border border-primary bg-primary py-3 pl-4 p-4 font-medium text-white transition hover:bg-opacity-90 disabled:opacity-50 items-center"
                >
                
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0285 5.91333V7.93241M16.0285 11.9706V13.9896M16.0285 18.0278V20.0469M5.93314 5.91333C4.81804 5.91333 3.91406 6.8173 3.91406 7.93241V10.961C5.02917 10.961 5.93314 11.865 5.93314 12.9801C5.93314 14.0952 5.02917 14.9992 3.91406 14.9992V18.0278C3.91406 19.1429 4.81804 20.0469 5.93314 20.0469H20.0667C21.1818 20.0469 22.0858 19.1429 22.0858 18.0278V14.9992C20.9707 14.9992 20.0667 14.0952 20.0667 12.9801C20.0667 11.865 20.9707 10.961 22.0858 10.961V7.93241C22.0858 6.8173 21.1818 5.91333 20.0667 5.91333H5.93314Z" stroke="white" stroke-width="2.16763" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                {{ loading ? 'Initializing a ticket...' : 'Submit a Ticket' }}
                </button>
            </router-link>
      </div>
      <div class="mb-5 mt-2">
            <router-link to="/support/raiseATicket">
                <button
                type="submit"
                :disabled="loading"
                class="flex gap-x-2 w-sm cursor-pointer rounded-full border border-primary bg-primary py-3 pl-4 p-4 font-medium text-white transition hover:bg-opacity-90 disabled:opacity-50 items-center"
                >
                
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0285 5.91333V7.93241M16.0285 11.9706V13.9896M16.0285 18.0278V20.0469M5.93314 5.91333C4.81804 5.91333 3.91406 6.8173 3.91406 7.93241V10.961C5.02917 10.961 5.93314 11.865 5.93314 12.9801C5.93314 14.0952 5.02917 14.9992 3.91406 14.9992V18.0278C3.91406 19.1429 4.81804 20.0469 5.93314 20.0469H20.0667C21.1818 20.0469 22.0858 19.1429 22.0858 18.0278V14.9992C20.9707 14.9992 20.0667 14.0952 20.0667 12.9801C20.0667 11.865 20.9707 10.961 22.0858 10.961V7.93241C22.0858 6.8173 21.1818 5.91333 20.0667 5.91333H5.93314Z" stroke="white" stroke-width="2.16763" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                {{ loading ? 'Initializing a ticket...' : 'Submit a Ticket' }}
                </button>
            </router-link>
      </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped>
    .support-screen {
        height : calc(100vh - 128px);
    }
    .support-form{
        width: 100vh;
    }
    .FirstHalfFileInputText{
      color: #6366F1;
      display: inline-block;
      font-size: 16px;
    }
    .SecondHalfFileInputText{
      color : #171717;
      display: inline-block;
      font-size: 16px;
    }
    .FileSpecification{
      display: block;
      color : #737373;
    }
    .UploadTextFileSpecificationIcon {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 100%
    }
</style>
