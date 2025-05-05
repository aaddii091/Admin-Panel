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
    <div class="bg-white text-black py-7 pt-6 pb-6 dark:bg-boxdark flex flex-col items-center justify-center">
      <h2 class="font-bold text-center text-[24px] leading-[36px] text-[#171717] pl-7 dark:text-white">Raise A Support Ticket</h2>

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
      <div class="support-container flex gap-x-70 items-center justify-center h-full mx-auto sm:max-w-[780px] w-full">
        <div class="mb-5 mt-2">
            <router-link to="/support/raiseATicket">
                <button
                type="submit"
                :disabled="loading"
                class="flex gap-x-2 w-sm cursor-pointer rounded-full border border-primary border-[#A5B4FC] py-3 p-4 font-medium text-[#A5B4FC] transition hover:bg-opacity-90 disabled:opacity-50 items-center px-16"
                >
                
                    
                  <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.6503 22.7351H11.3816C9.62936 22.7351 7.9528 21.9887 6.78462 20.7016L2.96639 16.5048C1.14922 14.5145 1.14922 11.5076 2.96639 9.5065L6.78462 5.3097C7.9528 4.01172 9.62936 3.26538 11.3816 3.26538H18.6503C22.0791 3.26538 24.8698 6.05604 24.8698 9.48487V16.5156C24.8698 19.9444 22.0791 22.7351 18.6503 22.7351ZM11.3816 4.88786C10.0945 4.88786 8.85057 5.4395 7.98525 6.39135L4.15621 10.599C2.91231 11.9727 2.91231 14.0386 4.15621 15.4123L7.97443 19.6091C8.83975 20.561 10.0837 21.1126 11.3708 21.1126H18.6503C21.1814 21.1126 23.2473 19.0467 23.2473 16.5156V9.48487C23.2473 6.95381 21.1814 4.88786 18.6503 4.88786H11.3816Z" fill="#A5B4FC"/>
                  <path d="M17.5689 16.483C17.3634 16.483 17.1578 16.4073 16.9956 16.245L11.6523 10.8908C11.3386 10.5772 11.3386 10.058 11.6523 9.74429C11.9659 9.43061 12.4851 9.43061 12.7988 9.74429L18.1422 15.0985C18.4558 15.4121 18.4558 15.9313 18.1422 16.245C17.9799 16.4073 17.7744 16.483 17.5689 16.483Z" fill="#A5B4FC"/>
                  <path d="M12.2255 16.4831C12.02 16.4831 11.8145 16.4074 11.6523 16.2452C11.3386 15.9315 11.3386 15.4123 11.6523 15.0986L16.9956 9.75528C17.3093 9.4416 17.8285 9.4416 18.1422 9.75528C18.4558 10.069 18.4558 10.5881 18.1422 10.9018L12.7988 16.2452C12.6366 16.4074 12.431 16.4831 12.2255 16.4831Z" fill="#A5B4FC"/>
                  </svg>


                {{ loading ? 'Initializing a ticket...' : 'Cancel' }}
                </button>
            </router-link>
      </div>
      <div class="mb-5 mt-2">
            <router-link to="/support/raiseATicket">
                <button
                type="submit"
                :disabled="loading"
                class="flex gap-x-2 w-sm cursor-pointer rounded-full border border-primary bg-primary py-3 p-4 font-medium text-white transition hover:bg-opacity-90 disabled:opacity-50 items-center px-16"
                >

                {{ loading ? 'Initializing a ticket...' : 'Submit' }}

                    
                  <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.7576 24.628C7.34344 24.628 2.12988 19.4145 2.12988 13.0003C2.12988 6.58611 7.34344 1.37256 13.7576 1.37256C20.1718 1.37256 25.3854 6.58611 25.3854 13.0003C25.3854 19.4145 20.1718 24.628 13.7576 24.628ZM13.7576 2.99503C8.2412 2.99503 3.75236 7.48388 3.75236 13.0003C3.75236 18.5167 8.2412 23.0056 13.7576 23.0056C19.274 23.0056 23.7629 18.5167 23.7629 13.0003C23.7629 7.48388 19.274 2.99503 13.7576 2.99503Z" fill="white"/>
                  <path d="M16.4613 13.8114H9.97139C9.52792 13.8114 9.16016 13.4437 9.16016 13.0002C9.16016 12.5567 9.52792 12.189 9.97139 12.189H16.4613C16.9048 12.189 17.2725 12.5567 17.2725 13.0002C17.2725 13.4437 16.9048 13.8114 16.4613 13.8114Z" fill="white"/>
                  <path d="M14.2978 17.0567C14.0923 17.0567 13.8868 16.981 13.7245 16.8187C13.4108 16.505 13.4108 15.9859 13.7245 15.6722L16.3962 13.0005L13.7245 10.3288C13.4108 10.0152 13.4108 9.49596 13.7245 9.18228C14.0382 8.8686 14.5574 8.8686 14.8711 9.18228L18.116 12.4272C18.4297 12.7409 18.4297 13.2601 18.116 13.5738L14.8711 16.8187C14.7088 16.981 14.5033 17.0567 14.2978 17.0567Z" fill="white"/>
                  </svg>


                </button>
            </router-link>
      </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped>
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
