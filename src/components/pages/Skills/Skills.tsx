import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Database, Cloud, PenTool, ChevronDown, ArrowRight, ArrowLeft } from 'lucide-react';
import AnimateString from '../../global/AnimateString';
import { twMerge } from 'tailwind-merge';
import {
  contentHeading,
  contentIndex,
  contentSubHeading,
  mainContent,
  pageHeading,
  pageName,
} from '../../../lib/fontClassNames';

const skillsData = [
  {
    category: 'Frontend',
    items: [
      {
        name: 'React.js',
        emphasized: true,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4 md:size-5">
            <g fill="currentColor">
              <path d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5c.029-.18.077-.37.1-.545c.217-2.058-.273-3.543-1.379-4.182c-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182c.018.175.067.365.095.545c-2.127.819-3.466 2.071-3.466 3.5s1.339 2.681 3.466 3.5c-.028.18-.077.37-.095.545c-.218 2.058.272 3.543 1.379 4.182c.376.213.803.322 1.235.316a6 6 0 0 0 3.514-1.56a6 6 0 0 0 3.515 1.56a2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182c-.019-.175-.067-.365-.1-.545c2.132-.819 3.471-2.071 3.471-3.5m-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212c-.012.106-.043.222-.058.33q-1.263-.365-2.57-.523a16 16 0 0 0-1.747-1.972a4.9 4.9 0 0 1 2.731-1.234m-7.917 8.781c.172.34.335.68.529 1.017s.395.656.6.969a14 14 0 0 1-1.607-.376a14 14 0 0 1 .478-1.61m-.479-4.076a14 14 0 0 1 1.607-.376q-.308.468-.6.969c-.195.335-.357.677-.529 1.017q-.286-.79-.478-1.61M8.3 12a19 19 0 0 1 .888-1.75q.496-.852 1.076-1.65c.619-.061 1.27-.1 1.954-.1q1.025.001 1.952.1a20 20 0 0 1 1.079 1.654q.488.851.887 1.746a19 19 0 0 1-1.953 3.403a19.2 19.2 0 0 1-3.931 0a20 20 0 0 1-1.066-1.653A19 19 0 0 1 8.3 12m7.816 2.25c.2-.337.358-.677.53-1.017q.286.791.478 1.611a15 15 0 0 1-1.607.376c.202-.314.404-.635.597-.97zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20 20 0 0 0-.6-.97q.814.142 1.606.376a14 14 0 0 1-.478 1.611zM12.217 6.34q.6.563 1.13 1.193q-.555-.031-1.129-.033c-.574-.002-.76.013-1.131.033q.53-.63 1.13-1.193m-4.249-1.7a1.5 1.5 0 0 1 .76-.187a4.9 4.9 0 0 1 2.729 1.233A16 16 0 0 0 9.71 7.658q-1.306.158-2.569.524c-.015-.109-.047-.225-.058-.331c-.171-1.619.151-2.787.885-3.211M3.718 12c0-.9.974-1.83 2.645-2.506c.218.857.504 1.695.856 2.506c-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12m4.25 7.361c-.734-.423-1.056-1.593-.885-3.212c.011-.106.043-.222.058-.331q1.262.365 2.564.524a16.4 16.4 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037m3.11-2.895q.56.033 1.14.034q.58-.001 1.139-.034a14 14 0 0 1-1.14 1.215a14 14 0 0 1-1.139-1.215m5.39 2.895c-.782.451-2.075.072-3.5-1.038a16 16 0 0 0 1.757-1.981a16.4 16.4 0 0 0 2.565-.523c.015.108.046.224.058.33c.175 1.619-.148 2.789-.88 3.212m1.6-4.854A16.6 16.6 0 0 0 17.216 12q.529-1.22.856-2.507c1.671.677 2.646 1.607 2.646 2.507s-.975 1.83-2.646 2.507z" />
              <path d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794" />
            </g>
          </svg>
        ),
      },
      {
        name: 'Next.js',
        emphasized: true,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            className="size-4 md:size-5"
          >
            <path
              fill="currentColor"
              d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64a64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64A64 64 0 0 0 64 0m17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92l-.111.096z"
              stroke-width="3"
              stroke="currentColor"
            />
          </svg>
        ),
      },
      {
        name: 'Tailwind',
        emphasized: true,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4 md:size-5">
            <path
              fill="currentColor"
              d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12"
            />
          </svg>
        ),
      },
      {
        name: 'HTML',
        emphasized: true,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4 md:size-5">
            <path
              fill="currentColor"
              d="m3 2l1.578 17.824L12 22l7.467-2.175L21 2zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565l-4.246 1.381l-4.281-1.455l-.288-2.932h2.024l.16 1.411l2.4.815l2.346-.763l.297-3.005H7.416l-.562-6.05h10.412z"
            />
          </svg>
        ),
      },
      {
        name: 'CSS',
        emphasized: true,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4 md:size-5">
            <path
              fill="currentColor"
              d="m3 2l1.578 17.834L12 22l7.468-2.165L21 2zm13.3 14.722l-4.293 1.204H12l-4.297-1.204l-.297-3.167h2.108l.15 1.526l2.335.639l2.34-.64l.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506z"
            />
          </svg>
        ),
      },
    ],
  },

  {
    category: 'Backend',
    items: [
      {
        name: 'Node.js',
        emphasized: true,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4 md:size-5">
            <path
              fill="currentColor"
              d="M21.3 6a.3.3 0 0 0-.3.3v5.497l-1.246-.727a.5.5 0 0 0-.508 0l-2.994 1.746a.5.5 0 0 0-.252.436v3.496c0 .18.096.346.252.436l2.994 1.746a.5.5 0 0 0 .508 0l2.994-1.746a.5.5 0 0 0 .252-.436V7.23a.5.5 0 0 0-.248-.431l-1.303-.758A.3.3 0 0 0 21.301 6zm-9.8 5.002a.5.5 0 0 0-.254.068l-2.994 1.746a.5.5 0 0 0-.252.436v3.496c0 .18.096.346.252.436l2.994 1.746c.157.09.35.09.508 0l2.994-1.746a.5.5 0 0 0 .252-.436v-3.496a.5.5 0 0 0-.252-.436l-2.994-1.746a.5.5 0 0 0-.254-.068m16 0a.5.5 0 0 0-.254.068l-2.994 1.746a.5.5 0 0 0-.252.436v3.496c0 .18.096.346.252.436l2.904 1.755a.5.5 0 0 0 .51.004l1.428-.83a.224.224 0 0 0 0-.386L26 15.904V14.11l1.5-.873l1.5.873v1.25c0 .167.14.193.234.137l1.518-.883a.5.5 0 0 0 .248-.431v-.93a.5.5 0 0 0-.252-.436l-2.994-1.746a.5.5 0 0 0-.254-.068zm-24 .002a.5.5 0 0 0-.254.068L.252 12.816a.51.51 0 0 0-.252.438v4.463c0 .218.236.353.424.244l1.328-.773A.5.5 0 0 0 2 16.756v-2.643l1.5-.875l1.5.875v2.643a.5.5 0 0 0 .248.431l1.328.774A.282.282 0 0 0 7 17.717v-4.463a.51.51 0 0 0-.252-.438l-2.994-1.744a.5.5 0 0 0-.254-.068m16 2.232l1.5.875v1.778l-1.5.875l-1.5-.875V14.11l1.5-.875zm8 .768l-.857.5v.998L27.5 16l.857-.498v-.998zm-12.094 3.994a.6.6 0 0 0-.297.076L12.297 19.7a.59.59 0 0 0-.297.512v3.246c0 .209.117.406.297.512l.74.422c.355.175.486.175.647.175c.53 0 .832-.317.832-.877v-3.207a.08.08 0 0 0-.082-.084h-.356a.084.084 0 0 0-.084.084v3.207c0 .243-.257.493-.676.284l-.77-.444a.09.09 0 0 1-.042-.074V20.21c0-.029.014-.063.043-.078l2.812-1.621a.09.09 0 0 1 .088 0l2.815 1.62c.029.016.043.045.043.079v3.246a.1.1 0 0 1-.043.078l-2.815 1.627a.09.09 0 0 1-.088 0l-.718-.428c-.02-.01-.05-.015-.069-.005a1.7 1.7 0 0 1-.424.195c-.049.015-.115.045.026.123l.933.555a.64.64 0 0 0 .297.078a.55.55 0 0 0 .293-.082l2.813-1.627a.59.59 0 0 0 .297-.512v-3.246a.6.6 0 0 0-.297-.512l-2.813-1.625a.6.6 0 0 0-.293-.076zm4.387 1.498a.54.54 0 1 0 .002 1.08a.54.54 0 0 0-.002-1.08m-.006.086c.254 0 .46.2.46.453a.467.467 0 0 1-.46.46a.456.456 0 0 1-.451-.46a.45.45 0 0 1 .451-.453m-.197.147v.607h.115v-.242h.108c.044 0 .054.018.064.052c0 .005.018.163.023.192h.125a.7.7 0 0 1-.029-.162c-.014-.078-.018-.132-.101-.137c.044-.015.117-.038.117-.15c0-.161-.14-.16-.213-.16h-.21zm.115.097h.098c.03 0 .088 0 .088.082c0 .034-.015.09-.094.088h-.092zm-3.545.496c-.803 0-1.28.343-1.28.907c0 .618.478.783 1.247.86c.92.093.992.225.992.405c0 .316-.254.447-.848.447c-.745 0-.908-.184-.962-.554c-.005-.04-.04-.069-.084-.069h-.366a.08.08 0 0 0-.082.084c0 .472.258 1.037 1.489 1.037c.903 0 1.414-.35 1.414-.964c0-.608-.41-.77-1.276-.887c-.876-.117-.963-.176-.963-.381c0-.17.072-.393.72-.393c.578 0 .794.127.882.516q.016.061.076.063h.365q.037-.002.059-.024q.024-.027.02-.062c-.058-.672-.502-.985-1.403-.985"
              stroke-width="1"
              stroke="currentColor"
            />
          </svg>
        ),
      },

      {
        name: 'MongoDB',
        emphasized: false,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4 md:size-5">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M7.294 11.804c0-3.966 2.14-6.417 3.533-8.014C11.501 3.02 12 2.447 12 2c0 .447.5 1.019 1.172 1.79c1.394 1.597 3.534 4.048 3.534 8.014c0 4.326-2.75 6.95-4.077 7.765L12.37 22h-.707l-.29-2.43c-1.326-.813-4.079-3.437-4.079-7.766m4.064 6.7L12 9.06l.649 9.446l-.65.75z"
              clip-rule="evenodd"
            />
          </svg>
        ),
      },

      {
        name: 'Express.js',
        emphasized: true,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4 md:size-5">
            <path
              fill="currentColor"
              d="M24 18.588a1.53 1.53 0 0 1-1.895-.72l-3.45-4.771l-.5-.667l-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92l-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83l3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27c1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.08 4.08 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.42 5.42 0 0 1-2.589 3.957a6.27 6.27 0 0 1-7.306-.933a6.58 6.58 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88 88 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278c-2.882-.04-4.944 2.094-5.071 5.264z"
            />
          </svg>
        ),
      },

      {
        name: 'Firebase',
        emphasized: true,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4 md:size-5">
            <path
              fill="currentColor"
              d="M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569a447 447 0 0 0-1.884-2.245l-.488-.576l-.207-.245l-.113-.133l-.022-.032l-.01-.005L12.57 0l-.609.488a13.34 13.34 0 0 0-3.681 4.64a11.4 11.4 0 0 0-1.043 3.176a12 12 0 0 0-.121.738a11 11 0 0 0-.632-.033l-.059-.003a7.5 7.5 0 0 0-2.28.274l-.317.089l-.163.286a9.6 9.6 0 0 0-1.252 4.416a9.53 9.53 0 0 0 1.583 5.625a9.57 9.57 0 0 0 4.42 3.611l.236.095l.071.025l.003-.001a9.6 9.6 0 0 0 2.941.568q.171.006.342.006a9.5 9.5 0 0 0 3.69-.742l.008.004l.313-.145a9.63 9.63 0 0 0 3.927-3.335a9.6 9.6 0 0 0 1.641-5.042c.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558c-1.135-1.12-1.967-2.352-2.475-3.665c-.543-1.404-.87-2.74-.974-3.975c.48.157.922.366 1.315.622c1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028a7.9 7.9 0 0 1-2.369.273a8 8 0 0 1-.373-.022a9 9 0 0 0 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398a7.4 7.4 0 0 0-2.194-.95a9 9 0 0 1 .089-.713a11.6 11.6 0 0 1 .91-2.765l.004-.008c.177-.358.376-.719.61-1.105l.092-.152l-.003-.001a11.7 11.7 0 0 1 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237c1.291 1.549 2.966 3.583 3.612 4.48c1.277 1.771 1.893 3.579 1.83 5.375a7.97 7.97 0 0 1-3.995 6.641a15.5 15.5 0 0 1-2.539-1.599c.79-1.575.952-3.28.479-5.072zm-2.575 5.397a7.9 7.9 0 0 1-2.09 1.856a6 6 0 0 1-.243-.093l-.065-.026a7.97 7.97 0 0 1-3.635-3.01a7.94 7.94 0 0 1-1.298-4.653a7.9 7.9 0 0 1 .882-3.379q.476-.105.96-.131l.084-.002q.245-.005.478 0q.341.017.677.07c.073 1.513.445 3.145 1.105 4.852c.637 1.644 1.694 3.162 3.144 4.515z"
            />
          </svg>
        ),
      },
    ],
  },
  {
    category: 'Mobile',
    items: [
      {
        name: 'React Native',
        emphasized: true,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4 md:size-5">
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M6.357 9C3.72 9.68 2 10.845 2 12.175C2 14.282 6.405 16 11.85 16c.74 0 1.26-.039 1.95-.097" />
              <path d="M9.837 15.9c-.413-.596-.806-1.133-1.18-1.8c-2.751-4.9-3.488-9.77-1.63-10.873c1.15-.697 3.047.253 4.974 2.254" />
              <path d="M6.429 15.387c-.702 2.688-.56 4.716.56 5.395c1.783 1.08 5.387-1.958 8.043-6.804q.54-1.005.968-1.978" />
              <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85-1.102 1.121-5.972-1.633-10.873c-.384-.677-.777-1.204-1.18-1.8" />
              <path d="M17.66 15c2.612-.687 4.34-1.85 4.34-3.176C22 9.714 17.592 8 12.155 8c-.747 0-1.266.029-1.955.087" />
              <path d="M8 12c.285-.66.607-1.308.968-1.978c2.647-4.844 6.253-7.89 8.046-6.801c1.11.679 1.262 2.706.56 5.393m-5.314 3.401h-.01c-.01.13-.12.24-.26.24a.263.263 0 0 1-.25-.26c0-.14.11-.25.24-.25h-.01c.13-.01.25.11.25.24" />
            </g>
          </svg>
        ),
      },

      {
        name: 'Expo',
        emphasized: true,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4 md:size-5">
            <path
              fill="currentColor"
              d="M0 20.084c.043.53.23 1.063.718 1.778c.58.849 1.576 1.315 2.303.567c.49-.505 5.794-9.776 8.35-13.29a.76.76 0 0 1 1.248 0c2.556 3.514 7.86 12.785 8.35 13.29c.727.748 1.723.282 2.303-.567c.57-.835.728-1.42.728-2.046c0-.426-8.26-15.798-9.092-17.078c-.8-1.23-1.044-1.498-2.397-1.542h-1.032c-1.353.044-1.597.311-2.398 1.542C8.267 3.991.33 18.758 0 19.77Z"
            />
          </svg>
        ),
      },
    ],
  },
  {
    category: 'Languages',
    items: [
      {
        name: 'JavaScript',
        emphasized: true,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="size-4 md:size-5"
          >
            <path
              fill="currentColor"
              d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160Zm-12.19 145a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a61.3 61.3 0 0 1-15.19-2a8 8 0 0 1 4.31-15.41c4.38 1.2 15 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.34-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.84 2.83 26.4 7.66 24.16 24.97M80 152v38a26 26 0 0 1-52 0a8 8 0 0 1 16 0a10 10 0 0 0 20 0v-38a8 8 0 0 1 16 0"
              stroke-width="6.5"
              stroke="currentColor"
            />
          </svg>
        ),
      },

      {
        name: 'TypeScript',
        emphasized: true,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="size-4 md:size-5"
          >
            <path
              fill="currentColor"
              d="M147.81 196.31a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a61.3 61.3 0 0 1-15.19-2a8 8 0 0 1 4.31-15.41c4.38 1.2 15 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.34-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.84 2.83 26.4 7.66 24.16 24.97M216 88v128a16 16 0 0 1-16 16h-24a8 8 0 0 1 0-16h24V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31Zm-80 64H40a8 8 0 0 0 0 16h12v48a8 8 0 0 0 16 0v-48h12a8 8 0 0 0 0-16"
              stroke-width="6.5"
              stroke="currentColor"
            />
          </svg>
        ),
      },

      {
        name: 'Java',
        emphasized: false,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4 md:size-5">
            <path
              fill="currentColor"
              d="m15.638 4.566l.056.032c-.758.4-2.924 1.689-2.924 3.332c0 .554.317 1.088.614 1.59c.262.442.509.857.509 1.238c0 .957-.933 1.7-1.46 2.042l-.1-.058c.199-.243.444-.65.444-1.084c0-.598-.307-1.076-.618-1.561c-.322-.501-.648-1.01-.648-1.67c0-2.292 3.115-3.522 4.127-3.861m-4.095 1.212c1.253-1.12 2.622-2.344 2.622-4.185c0-.833-.341-1.365-.51-1.578L13.6.046c.04.166.1.472.1.872c0 1.676-1.422 2.85-2.798 3.988C9.611 5.974 8.36 7.008 8.36 8.392c0 1.985 1.958 3.206 2.785 3.722l.063.04l.05-.03q-.067-.074-.142-.152c-.636-.677-1.602-1.704-1.602-3.275c0-1.103.974-1.974 2.03-2.919m-.452 9.908c1.764 0 2.998-.253 3.546-.408l.832.48c-.793.403-2.551.71-4.382.71c-2.153 0-4.507-.462-4.514-1.078c-.005-.34.765-.566 1.595-.712l.05.029s-.281.101-.278.333c.004.35 1.42.646 3.15.646m-3.529 2.171c0-.408.839-.6 1.223-.677l.05.03c-.066.049-.102.116-.102.173c0 .267.93.511 2.356.511c1.278 0 1.988-.157 2.41-.258l.99.573c-.045.032-1.02.645-3.402.645c-1.731 0-3.525-.432-3.525-.997m8.529-1.728c1.18-.673 2.361-1.469 2.428-2.747c.044-.839-.727-1.454-1.57-1.29l.045-.112v-.002c.212-.064.474-.116.767-.116c.943 0 1.666.565 1.758 1.356c.186 1.586-2.062 2.618-3.321 2.973zm1.975 2.988c.01 1.09-3.698 1.738-7.012 1.767c-2.861.025-7.474-.516-7.484-1.605c-.006-.753 2-1.275 3.09-1.425l.115.066s-1.625.377-1.62 1.062c.006.683 3.425 1.274 5.894 1.253c3.825-.034 6.414-.657 6.72-1.502l.054-.031c.112.082.24.217.243.415M6.43 21.337a26 26 0 0 0 4.279.325c6.208-.054 7.96-1.58 8.23-1.912l.047.028c-.064 1.208-3.347 2.212-7.396 2.247c-2.061.018-3.937-.22-5.285-.615zm2.602-9.283c-1.079.083-3.396.426-3.396 1.036c0 .462 2.124 1.113 5.452 1.113c2.994 0 4.884-.565 5.325-.78l-.643-.375c-.46.125-2.169.506-4.682.506c-1.48 0-4.03-.273-4.03-.69c0-.374 1.591-.663 2.048-.745l.029-.005z"
            />
          </svg>
        ),
      },
    ],
  },

  {
    category: 'Testing & Cloud',
    items: [
      { name: 'AWS', emphasized: true, icon: <Cloud className="size-4 md:size-5" /> },

      { name: 'Cloudinary', emphasized: false, icon: <Database className="size-4 md:size-5" /> },
    ],
  },

  {
    category: 'Tools',
    items: [
      {
        name: 'Docker',
        emphasized: false,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4 md:size-5">
            <path
              fill="currentColor"
              d="M8.8 8.8h1.8c.1 0 .2-.1.2-.2V7.1c0-.1-.1-.2-.2-.2H8.8c-.1 0-.2.1-.2.2v1.6s.1.1.2.1m2.4 2.3H13c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2h-1.8c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2m0-2.3H13c.1 0 .2-.1.2-.2V7.1l-.2-.2h-1.8c-.1 0-.2.1-.2.2v1.6s.1.1.2.1m2.5 2.3h1.8c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2h-1.8c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2m-2.5-4.6H13c.1 0 .2-.1.2-.2V4.8c0-.1-.1-.2-.2-.2h-1.8c-.1 0-.2.1-.2.2v1.6c0 .1.1.1.2.1m-7.4 4.6h1.8c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2H3.8c-.1 0-.2.1-.2.2v1.6zm18-1c-.5-.3-1.1-.5-1.6-.4c-.3 0-.6 0-.8.1c-.2-.9-.7-1.7-1.4-2.1l-.3-.2l-.2.3c-.3.2-.5.6-.6 1.1c-.2.8-.1 1.6.3 2.2c-.5.2-1 .3-1.5.4H2.6c-.3 0-.6.3-.6.6c0 1.2.2 2.3.6 3.4s1.1 2 2 2.6c1.4.7 2.9 1 4.4.9c.8 0 1.6-.1 2.4-.2c1.1-.2 2.2-.6 3.2-1.2c.8-.5 1.5-1.1 2.2-1.8c.9-1.1 1.6-2.3 2.1-3.7h.2c.8 0 1.6-.3 2.2-.8q.45-.3.6-.9l.1-.2zm-15.5 1H8c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2H6.3c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2m0-2.3H8c.1 0 .2-.1.2-.2V7.1c0-.1-.1-.2-.2-.2H6.3c-.1 0-.2.1-.2.2v1.6s.1.1.2.1m2.5 2.3h1.8c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2H8.8c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2"
            />
          </svg>
        ),
      },

      {
        name: 'Git',
        emphasized: true,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4 md:size-5">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M12.955.893a1.35 1.35 0 0 0-1.91 0L8.24 3.7c.219.208.43.41.54.52l2.25 2.25a2.25 2.25 0 0 1 3 3l1.25 1.25a2.25 2.25 0 1 1-1.06 1.06l-1.25-1.248a2 2 0 0 1-.22.09v3.757a2.251 2.251 0 1 1-1.5 0v-3.756A2.25 2.25 0 0 1 9.97 7.53L7.72 5.28c-.074-.073-.29-.299-.52-.541L.894 11.045a1.35 1.35 0 0 0 0 1.91l10.151 10.15a1.35 1.35 0 0 0 1.91 0l10.151-10.15a1.35 1.35 0 0 0 0-1.91zM12 15.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m.75-7.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m2.75 4.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0"
              clip-rule="evenodd"
            />
          </svg>
        ),
      },

      {
        name: 'Postman',
        emphasized: true,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            className="size-4 md:size-5"
          >
            <path
              fill="currentColor"
              d="M62.988 1.943c-12.929.2-25.904 4.428-36.925 12.94c-27.125 20.953-32.13 59.93-11.176 87.055c20.957 27.123 59.937 32.124 87.058 11.167c27.114-20.952 32.118-59.918 11.172-87.039C100.68 9.96 81.884 1.65 62.988 1.943m28.875 23.139a9.27 9.27 0 0 1 5.586 1.914l-8.068 8.117a1 1 0 0 0-.076.098a.83.83 0 0 0-.239.55a.83.83 0 0 0 .313.65h.002l6.1 6.1a9.04 9.04 0 0 1-10.028-1.913c-2.586-2.6-3.336-6.504-1.953-9.891c1.383-3.39 4.68-5.605 8.363-5.625m7.12 3.432a8.87 8.87 0 0 1 2.033 5.674a9.15 9.15 0 0 1-2.688 6.464a10 10 0 0 1-1.098.895L92.307 36.7l-.963-.963l.265-.265l7.373-6.96zm-.366 4.193a.78.78 0 0 0-.55.031a.73.73 0 0 0-.36.426a.73.73 0 0 0 .05.559a2.23 2.23 0 0 1-.257 2.328a.64.64 0 0 0-.195.488c.004.184.07.36.195.492a.58.58 0 0 0 .414 0a.68.68 0 0 0 .672-.207a3.57 3.57 0 0 0 .465-3.777v.004a.78.78 0 0 0-.434-.344M79.34 39.43a5.6 5.6 0 0 1 3.31 1.226a4.76 4.76 0 0 0-2.681 1.34L57.162 64.701l-4.476-4.476c11.828-11.772 19.06-17.921 23.556-19.936a5.6 5.6 0 0 1 3.098-.86zm3.965 2.96a2.9 2.9 0 0 1 2.043.844a2.8 2.8 0 0 1 .879 2.121a2.87 2.87 0 0 1-.985 2.07l-24.25 21.106l-2.617-2.617l22.887-22.68a2.9 2.9 0 0 1 2.043-.843zm2.994 6.698c-1.69 6.702-10.647 15.783-19.987 24.607l-3.777-3.773zM51.367 61.547l.274.27l3.513 3.513l-9.63 2.06zm5.793 5.84l.004.004l1.168 1.195l.018.084l.078.012l.248.254l.82.84l-5.385.66zm3.867 4.076l3.578 3.576A127 127 0 0 1 38.75 91.695a1.44 1.44 0 0 0-.777 1.653l1.035 4.5a.31.31 0 0 1 0 .363a.31.31 0 0 1-.414 0l-6.102-6.152L51.3 72.975zm-29.933 21.94l.869.814l4.492 4.492l-10.016-.648l4.655-4.659z"
              stroke-width="3"
              stroke="currentColor"
            />
          </svg>
        ),
      },
      {
        name: 'VSCode',
        emphasized: true,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="size-4 md:size-5">
            <path
              fill="currentColor"
              d="M10.863 13.919a.8.8 0 0 1-.644.025a.8.8 0 0 1-.279-.183L4.816 9.063l-2.232 1.703a.54.54 0 0 1-.691-.031l-.716-.655a.546.546 0 0 1 0-.805L3.112 7.5L1.177 5.725a.546.546 0 0 1 0-.805l.716-.655a.54.54 0 0 1 .691-.031l2.232 1.703L9.94 1.239a.805.805 0 0 1 .923-.159l2.677 1.295c.281.136.46.422.46.736V8h-3.248V4.534L6.864 7.5l3.888 2.966V8H14v3.889c0 .314-.179.6-.46.736z"
            />
          </svg>
        ),
      },
      {
        name: 'Cursor / Anitgravity',
        emphasized: true,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4 md:size-5">
            <path
              fill="currentColor"
              d="M12.025 2q2.025 0 3.163 1.525T17.125 7q.65 1.575 1.25 3.5t1.275 3.875q.65 1.875 1.425 3.525t1.8 2.825q.2.225.175.525t-.225.525t-.475.25t-.55-.175q-1.975-1.55-3.25-3.463t-2.575-3.337q-.85-.95-1.812-1.5T12.025 13t-2.137.55t-1.813 1.5q-1.3 1.425-2.575 3.338T2.25 21.85q-.275.2-.55.175t-.475-.25T1 21.25t.175-.525Q2.2 19.55 2.975 17.9T4.4 14.375q.675-1.95 1.275-3.875T6.925 7q.8-1.95 1.938-3.475T12.025 2"
            />
          </svg>
        ),
      },
    ],
  },

  {
    category: 'CS Fundamentals',

    items: [
      {
        name: 'System Design',
        emphasized: true,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4 md:size-5">
            <path
              fill="currentColor"
              d="M14 13h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-3l-1-1h-2a1 1 0 0 0-1 1v1H8V7h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7L6 1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2v13h7v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3l-1-1h-2a1 1 0 0 0-1 1v1H8v-7h5v1a1 1 0 0 0 1 1"
            />
          </svg>
        ),
      },
      {
        name: 'Data Structures',
        emphasized: true,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4 md:size-5">
            <path
              fill="currentColor"
              d="m20.083 10.5l1.202.721a.5.5 0 0 1 0 .858L12 17.649l-9.285-5.57a.5.5 0 0 1 0-.858l1.202-.721L12 15.35zm0 4.7l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05zM12.514 1.309l8.771 5.262a.5.5 0 0 1 0 .858L12 12.999L2.715 7.43a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0"
            />
          </svg>
        ),
      },
      { name: 'DBMS', emphasized: true, icon: <Server className="size-4 md:size-5" /> },
    ],
  },
  {
    category: 'Interest Areas',
    items: [{ name: 'UI/UX Design', emphasized: true, icon: <PenTool /> }],
  },
];

export default function SkillsSection({ scrollToPage }: { scrollToPage: (index: number) => void }) {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [openSection, setOpenSection] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSection(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      id="mohammad-bilal-skills"
      className="relative flex flex-col justify-center py-[10dvh] w-full min-h-dvh overflow-hidden font-space-grotesk font-bold"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mx-[7dvw] md:mx-[10dvw] py-6 md:py-10"
      >
        <div className="bg-zinc-700 w-12 h-px" />
        <span
          className={twMerge(pageName, 'font-medium text-text-secondary uppercase tracking-widest')}
        >
          What I bring to the table.
        </span>
      </motion.div>

      <motion.div
        className="flex w-[200dvw] h-full"
        animate={{ x: showAllSkills ? '-100vw' : '0vw' }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        {/* === PAGE 1: STORYTELLING === */}
        <div className="flex flex-col justify-center items-center w-dvw h-full">
          <div className="px-[10dvw] w-full">
            <h2
              className={twMerge(pageHeading, 'mb-6 font-bold text-text-primary/85  leading-[1.1]')}
            >
              <AnimateString delayOffset={0.05}>I don't just write code. </AnimateString>
              <br />
              <span className="text-text-muted">
                <AnimateString delayOffset={0.12}>I engineer solutions.</AnimateString>
              </span>
            </h2>

            <p
              className={twMerge(
                mainContent,
                'mb-16 max-w-3xl text-text-secondary leading-relaxed'
              )}
            >
              <AnimateString delayOffset={0.18}>
                My technical philosophy balances performance with aesthetics. I leverage modern
                frameworks to build applications that scale effortlessly.
              </AnimateString>
            </p>

            {/* The 3 Pillars - Numbered List */}
            <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mb-20">
              <StoryCard
                index={0}
                number="// 01"
                title="Performance First"
                desc="Optimized rendering patterns and server-side strategies ensure instant interactions."
              />
              <StoryCard
                index={1}
                number="// 02"
                title="Type Safe & Secure"
                desc="Rigorous TypeScript implementation and secure authentication flows for robust apps."
              />
              <StoryCard
                index={2}
                number="// 03"
                title="Motion & Interaction"
                desc="Using Framer Motion to create meaningful micro-interactions that guide the users."
              />
            </div>

            <button
              onClick={() => {
                setShowAllSkills(true);
                scrollToPage(2);
              }}
              className="group flex items-center gap-4 font-light text-text-primary/90 text-xs md:text-lg underline underline-offset-3 underline-text-secondary cursor-pointer"
            >
              <div className="w-6 md:w-12 group-hover:w-24 h-px bg-text-primary transition-all duration-300" />
              See Full Tech Stack
              <span className="bg-background-surface p-2 rounded-full text-text-primary transition-transform group-hover:translate-x-2 duration-300">
                <ArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>

        {/* PAGE 2 (Detailed Stack) omitted for brevity - remains the same as your source */}
        <div className="px-[13dvw] md:px-[5dvw] w-dvw">
          <div className="mx-auto max-w-5xl min-h-full">
            {/* Back Button Header */}
            <div className="flex justify-between items-center gap-6 mb-12">
              <div>
                <h3 className="font-bold text-text-primary text-xl md:text-3xl">
                  Technical Arsenal
                </h3>
                <p className="ml-2 font-mono text-text-secondary text-sm">Full Breakdown</p>
              </div>
              <button
                onClick={() => {
                  setOpenSection([]);
                  scrollToPage(2);
                  setShowAllSkills(false);
                }}
                className="group flex items-center gap-2 hover:bg-background-overlay/40 px-6 py-3 border border-border-subtle rounded-full text-text-secondary text-xxs md:text-sm transition-colors start"
              >
                <ArrowLeft
                  size={24}
                  className="text-text-primary/20 group-hover:text-text-primary transition-all group-hover:-translate-x-1.5 ease-in-out"
                />

                <span> Go back!</span>
              </button>
            </div>

            {/* Your Existing Grid */}

            <div className="gap-x-12 gap-y-8 grid grid-cols-1 md:grid-cols-2 pb-20">
              {skillsData.map((section, index) => (
                <CollapsibleSection
                  key={section.category}
                  index={index}
                  title={section.category}
                  isOpen={openSection.includes(index)}
                  onToggle={() => toggleSection(index)}
                >
                  <div className="flex flex-wrap justify-start items-between gap-3">
                    {section.items.map(skill => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                </CollapsibleSection>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
const CollapsibleSection = ({
  title,
  children,
  isOpen,
  onToggle,
  index,
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) => {
  return (
    <div className="border-zinc-800 border-b">
      <button
        onClick={onToggle}
        className="group flex justify-between items-center py-5 w-full text-left"
      >
        <div className="flex items-baseline gap-4">
          <span
            className={twMerge(
              contentSubHeading,
              'font-mono  text-text-secondary/50 group-hover:text-text-secondary  transition-colors duration-300'
            )}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <h3
            className={twMerge(
              contentHeading,
              'font-semibold text-lg md:text-2xl transition-colors duration-300 ease-in-out',
              isOpen ? 'text-text-primary' : 'text-text-secondary group-hover:text-zinc-300'
            )}
          >
            {title}
          </h3>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-zinc-500"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ scaleY: 0, opacity: 0, height: 0 }}
            animate={{ scaleY: 1, opacity: 1, height: 'auto' }}
            exit={{ scaleY: 0, opacity: 0, height: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            style={{ transformOrigin: 'top' }}
            className="z-10 flex flex-wrap overflow-hidden origin-top"
          >
            <div className="pt-4 pb-8 w-full">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SkillCard = ({ skill }: { skill: any }) => {
  const isEmphasized = skill.emphasized;

  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl border
        flex flex-wrap items-center gap-3 px-4 py-3
         shadow-sm 
        ${
          !isEmphasized
            ? 'bg-background-surface/50  border-border-default w-full md:w-auto'
            : 'bg-background-surface/90  border-border-strong'
        }
      `}
    >
      <div className={`${isEmphasized ? 'text-text-primary/90' : 'text-text-primary/70'}`}>
        {React.cloneElement(skill.icon, { size: 18 })}
      </div>
      <span
        className={`font-medium text-xxxs  md:text-xs ${isEmphasized ? 'text-text-primary/90' : 'text-text-primary/70'}`}
      >
        {skill.name}
      </span>
      {isEmphasized && (
        <div className="top-0 right-0 absolute bg-linear-to-b from-transparent via-indigo-500/50 to-transparent opacity-50 w-px h-full" />
      )}
    </motion.div>
  );
};
const StoryCard = ({
  number,
  title,
  desc,
  index,
}: {
  number: string;
  title: string;
  desc: string;
  index: number;
}) => {
  // Staggered slide-in variants
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.7,
        ease: [0.2, 0.65, 0.3, 0.9],
        delay: index * 0.12, // Stagger the cards themselves
      }}
      viewport={{ once: true }}
      className="py-4 pl-6 border-border-subtle border-l"
    >
      <div className={twMerge(contentIndex, 'mb-4 font-mono text-zinc-500 tracking-tighter')}>
        {number}
      </div>
      <h3 className={twMerge(contentHeading, 'mb-3 font-bold text-text-primary/85')}>
        <AnimateString delayOffset={index * 0.12}>{title}</AnimateString>
      </h3>
      <p className={twMerge(contentSubHeading, 'max-w-xs text-text-secondary  leading-relaxed')}>
        <AnimateString delayOffset={index * 0.12}>{desc}</AnimateString>
      </p>
    </motion.div>
  );
};
