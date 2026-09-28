// =====================================================
// GOOGLE APPS SCRIPT URL
// Paste your Apps Script URL here after deploying
// =====================================================

var APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxBBDN4UwbnkmO26-y48f5wsVnHJJNR_LV4boTwlQ8t8Th-y3i0T1NPONY0bsJ-SUYGBQ/exec";


// =====================================================
// SURVEY QUESTION BANK
// =====================================================

const questionBank = [

    {
        id: "1",
        subQuestions: [
            {
                id: "1.1",
                image: "images/10M.png",
                context: "Review the PA and lateral wrist X-rays of a 10-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the imaging, how would you classify the distal radius fracture morphology?",
                choices: ["Torus / Buckle fracture","Greenstick fracture","Non/minimally displaced Complete Fracture","Physeal Fracture (Salter-Harris)","No Acute Fracture Identified"]
            },
            {
                id: "1.2",
                stem: "Based on the clinical history and imaging findings, which treatment options are acceptable for this fracture pattern?",
                choices: ["Removable brace","Cast (no reduction)","Closed reduction and casting","Closed reduction in the OR and pinning","Open reduction and internal fixation"]
            },
            {
                id: "1.3",
                image: "images/10M_6w.png",
                stem: "Review the 6-week follow-up wrist X-rays provided. The patient and parents are asking about returning to activities. What is your recommended plan?",
                choices: ["Continue current immobilization (cast/rigid brace) for another 3-4 weeks","Transition to removable splint for daily wear (restrict contact sports & high-risk play) for another 6 weeks","Can return to non-contact sports with a protective brace for 6 weeks","Full clearance: Can return to all activities and sports without limitations"]
            }
        ]
    },

    {
        id: "2",
        subQuestions: [
            {
                id: "2.1",
                image: "images/7M.png",
                context: "Review the PA and lateral wrist X-rays of a 7-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the imaging, how would you classify the distal radius fracture morphology?",
                choices: ["Torus / Buckle fracture","Greenstick fracture","Non/minimally displaced Complete Fracture","Physeal Fracture (Salter-Harris)","No Acute Fracture Identified"]
            },
            {
                id: "2.2",
                stem: "Based on the clinical history and imaging findings, which treatment options are acceptable for this fracture pattern?",
                choices: ["Removable brace","Cast (no reduction)","Closed reduction and casting","Closed reduction in the OR and pinning","Open reduction and internal fixation"]
            },
            {
                id: "2.3",
                image: "images/7M_6w.png",
                stem: "Review the 6-week follow-up wrist X-rays provided. The patient and parents are asking about returning to activities. What is your recommended plan?",
                choices: ["Continue current immobilization (cast/rigid brace) for another 3-4 weeks","Transition to removable splint for daily wear (restrict contact sports & high-risk play) for another 6 weeks","Can return to non-contact sports with a protective brace for 6 weeks","Full clearance: Can return to all activities and sports without limitations"]
            }
        ]
    },

    {
        id: "3",
        subQuestions: [
            {
                id: "3.1",
                image: "images/8M.png",
                context: "Review the PA and lateral wrist X-rays of a 8-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the imaging, how would you classify the distal radius fracture morphology?",
                choices: ["Torus / Buckle fracture","Greenstick fracture","Non/minimally displaced Complete Fracture","Physeal Fracture (Salter-Harris)","No Acute Fracture Identified"]
            },
            {
                id: "3.2",
                stem: "Based on the clinical history and imaging findings, which treatment options are acceptable for this fracture pattern?",
                choices: ["Removable brace","Cast (no reduction)","Closed reduction and casting","Closed reduction in the OR and pinning","Open reduction and internal fixation"]
            },
            {
                id: "3.3",
                image: "images/8M_6w.png",
                stem: "Review the 6-week follow-up wrist X-rays provided. The patient and parents are asking about returning to activities. What is your recommended plan?",
                choices: ["Continue current immobilization (cast/rigid brace) for another 3-4 weeks","Transition to removable splint for daily wear (restrict contact sports & high-risk play) for another 6 weeks","Can return to non-contact sports with a protective brace for 6 weeks","Full clearance: Can return to all activities and sports without limitations"]
            }
        ]
    },

    {
        id: "4",
        subQuestions: [
            {
                id: "4.1",
                image: "images/8M (2).png",
                context: "Review the PA and lateral wrist X-rays of a 7-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the imaging, how would you classify the distal radius fracture morphology?",
                choices: ["Torus / Buckle fracture","Greenstick fracture","Non/minimally displaced Complete Fracture","Physeal Fracture (Salter-Harris)","No Acute Fracture Identified"]
            },
            {
                id: "4.2",
                stem: "Based on the clinical history and imaging findings, which treatment options are acceptable for this fracture pattern?",
                choices: ["Removable brace","Cast (no reduction)","Closed reduction and casting","Closed reduction in the OR and pinning","Open reduction and internal fixation"]
            },
            {
                id: "4.3",
                image: "images/8M (2)_6w.png",
                stem: "Review the 6-week follow-up wrist X-rays provided. The patient and parents are asking about returning to activities. What is your recommended plan?",
                choices: ["Continue current immobilization (cast/rigid brace) for another 3-4 weeks","Transition to removable splint for daily wear (restrict contact sports & high-risk play) for another 6 weeks","Can return to non-contact sports with a protective brace for 6 weeks","Full clearance: Can return to all activities and sports without limitations"]
            }
        ]
    },

    {
        id: "5",
        subQuestions: [
            {
                id: "5.1",
                image: "images/12M.png",
                context: "Review the PA and lateral wrist X-rays of a 12-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the imaging, how would you classify the distal radius fracture morphology?",
                choices: ["Torus / Buckle fracture","Greenstick fracture","Non/minimally displaced Complete Fracture","Physeal Fracture (Salter-Harris)","No Acute Fracture Identified"]
            },
            {
                id: "5.2",
                stem: "Based on the clinical history and imaging findings, which treatment options are acceptable for this fracture pattern?",
                choices: ["Removable brace","Cast (no reduction)","Closed reduction and casting","Closed reduction in the OR and pinning","Open reduction and internal fixation"]
            },
            {
                id: "5.3",
                image: "images/12M_6w.png",
                stem: "Review the 6-week follow-up wrist X-rays provided. The patient and parents are asking about returning to activities. What is your recommended plan?",
                choices: ["Continue current immobilization (cast/rigid brace) for another 3-4 weeks","Transition to removable splint for daily wear (restrict contact sports & high-risk play) for another 6 weeks","Can return to non-contact sports with a protective brace for 6 weeks","Full clearance: Can return to all activities and sports without limitations"]
            }
        ]
    },

    {
        id: "6",
        subQuestions: [
            {
                id: "6.1",
                image: "images/7M (2).png",
                context: "Review the PA and lateral wrist X-rays of a 7-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the imaging, how would you classify the distal radius fracture morphology?",
                choices: ["Torus / Buckle fracture","Greenstick fracture","Non/minimally displaced Complete Fracture","Physeal Fracture (Salter-Harris)","No Acute Fracture Identified"]
            },
            {
                id: "6.2",
                stem: "Based on the clinical history and imaging findings, which treatment options are acceptable for this fracture pattern?",
                choices: ["Removable brace","Cast (no reduction)","Closed reduction and casting","Closed reduction in the OR and pinning","Open reduction and internal fixation"]
            },
            {
                id: "6.3",
                image: "images/7M (2)_6w.png",
                stem: "Review the 6-week follow-up wrist X-rays provided. The patient and parents are asking about returning to activities. What is your recommended plan?",
                choices: ["Continue current immobilization (cast/rigid brace) for another 3-4 weeks","Transition to removable splint for daily wear (restrict contact sports & high-risk play) for another 6 weeks","Can return to non-contact sports with a protective brace for 6 weeks","Full clearance: Can return to all activities and sports without limitations"]
            }
        ]
    },

    {
        id: "7",
        subQuestions: [
            {
                id: "7.1",
                image: "images/9M.png",
                context: "Review the PA and lateral wrist X-rays of a 9-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the imaging, how would you classify the distal radius fracture morphology?",
                choices: ["Torus / Buckle fracture","Greenstick fracture","Non/minimally displaced Complete Fracture","Physeal Fracture (Salter-Harris)","No Acute Fracture Identified"]
            },
            {
                id: "7.2",
                stem: "Based on the clinical history and imaging findings, which treatment options are acceptable for this fracture pattern?",
                choices: ["Removable brace","Cast (no reduction)","Closed reduction and casting","Closed reduction in the OR and pinning","Open reduction and internal fixation"]
            },
            {
                id: "7.3",
                image: "images/9M_6w.png",
                stem: "Review the 6-week follow-up wrist X-rays provided. The patient and parents are asking about returning to activities. What is your recommended plan?",
                choices: ["Continue current immobilization (cast/rigid brace) for another 3-4 weeks","Transition to removable splint for daily wear (restrict contact sports & high-risk play) for another 6 weeks","Can return to non-contact sports with a protective brace for 6 weeks","Full clearance: Can return to all activities and sports without limitations"]
            }
        ]
    },

    {
        id: "8",
        subQuestions: [
            {
                id: "8.1",
                image: "images/11F.png",
                context: "Review the PA and lateral wrist X-rays of a 11-year old female who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the imaging, how would you classify the distal radius fracture morphology?",
                choices: ["Torus / Buckle fracture","Greenstick fracture","Non/minimally displaced Complete Fracture","Physeal Fracture (Salter-Harris)","No Acute Fracture Identified"]
            },
            {
                id: "8.2",
                stem: "Based on the clinical history and imaging findings, which treatment options are acceptable for this fracture pattern?",
                choices: ["Removable brace","Cast (no reduction)","Closed reduction and casting","Closed reduction in the OR and pinning","Open reduction and internal fixation"]
            },
            {
                id: "8.3",
                image: "images/11F_REDUCTION.png",
                stem: "Based on the following image, is this an acceptable reduction?",
                choices: ["Yes","No"]
            },
            {
                id: "8.4",
                image: "images/11F_6w.png",
                stem: "Review the 6-week follow-up wrist X-rays provided. The patient and parents are asking about returning to activities. What is your recommended plan?",
                choices: ["Continue current immobilization (cast/rigid brace) for another 3-4 weeks","Transition to removable splint for daily wear (restrict contact sports & high-risk play) for another 6 weeks","Can return to non-contact sports with a protective brace for 6 weeks","Full clearance: Can return to all activities and sports without limitations"]
            }
        ]
    },

    {
        id: "9",
        subQuestions: [
            {
                id: "9.1",
                image: "images/8M (3).png",
                context: "Review the PA and lateral wrist X-rays of a 8-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the imaging, how would you classify the distal radius fracture morphology?",
                choices: ["Torus / Buckle fracture","Greenstick fracture","Non/minimally displaced Complete Fracture","Physeal Fracture (Salter-Harris)","No Acute Fracture Identified"]
            },
            {
                id: "9.2",
                stem: "Based on the clinical history and imaging findings, which treatment options are acceptable for this fracture pattern?",
                choices: ["Removable brace","Cast (no reduction)","Closed reduction and casting","Closed reduction in the OR and pinning","Open reduction and internal fixation"]
            },
            {
                id: "9.3",
                image: "images/8M (3)_reduction.png",
                stem: "Based on the following image, is this an acceptable reduction?",
                choices: ["Yes","No"]
            },
            {
                id: "9.4",
                image: "images/8M (3)_6w.png",
                stem: "Review the 6-week follow-up wrist X-rays provided. The patient and parents are asking about returning to activities. What is your recommended plan?",
                choices: ["Continue current immobilization (cast/rigid brace) for another 3-4 weeks","Transition to removable splint for daily wear (restrict contact sports & high-risk play) for another 6 weeks","Can return to non-contact sports with a protective brace for 6 weeks","Full clearance: Can return to all activities and sports without limitations"]
            }
        ]
    },

    {
        id: "10",
        subQuestions: [
            {
                id: "10.1",
                image: "images/5M.png",
                context: "Review the PA and lateral wrist X-rays of a 5-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the imaging, how would you classify the distal radius fracture morphology?",
                choices: ["Torus / Buckle fracture","Greenstick fracture","Non/minimally displaced Complete Fracture","Physeal Fracture (Salter-Harris)","No Acute Fracture Identified"]
            },
            {
                id: "10.2",
                stem: "Based on the clinical history and imaging findings, which treatment options are acceptable for this fracture pattern?",
                choices: ["Removable brace","Cast (no reduction)","Closed reduction and casting","Closed reduction in the OR and pinning","Open reduction and internal fixation"]
            },
            {
                id: "10.3",
                image: "images/5M_REDUCTION.png",
                stem: "Based on the following image, is this an acceptable reduction?",
                choices: ["Yes","No"]
            }
        ]
    },

    {
        id: "11",
        subQuestions: [
            {
                id: "11.1",
                image: "images/15M.png",
                context: "Review the PA and lateral wrist X-rays of a 15-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the imaging, how would you classify the distal radius fracture morphology?",
                choices: ["Torus / Buckle fracture","Greenstick fracture","Non/minimally displaced Complete Fracture","Physeal Fracture (Salter-Harris)","No Acute Fracture Identified"]
            },
            {
                id: "11.2",
                stem: "Based on the clinical history and imaging findings, which treatment options are acceptable for this fracture pattern?",
                choices: ["Removable brace","Cast (no reduction)","Closed reduction and casting","Closed reduction in the OR and pinning","Open reduction and internal fixation"]
            },
            {
                id: "11.3",
                image: "images/15M_6w.png",
                stem: "Review the 6-week follow-up wrist X-rays provided. The patient and parents are asking about returning to activities. What is your recommended plan?",
                choices: ["Continue current immobilization (cast/rigid brace) for another 3-4 weeks","Transition to removable splint for daily wear (restrict contact sports & high-risk play) for another 6 weeks","Can return to non-contact sports with a protective brace for 6 weeks","Full clearance: Can return to all activities and sports without limitations"]
            }
        ]
    },

    {
        id: "12",
        subQuestions: [
            {
                id: "12.1",
                image: "images/6F (2).png",
                context: "Review the PA and lateral wrist X-rays of a 6-year old female who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the imaging, how would you classify the distal radius fracture morphology?",
                choices: ["Torus / Buckle fracture","Greenstick fracture","Non/minimally displaced Complete Fracture","Physeal Fracture (Salter-Harris)","No Acute Fracture Identified"]
            },
            {
                id: "12.2",
                stem: "Based on the clinical history and imaging findings, which treatment options are acceptable for this fracture pattern?",
                choices: ["Removable brace","Cast (no reduction)","Closed reduction and casting","Closed reduction in the OR and pinning","Open reduction and internal fixation"]
            },
            {
                id: "12.3",
                image: "images/6F(2)_5m.png",
                stem: "Review the 5-month follow-up wrist X-rays provided. The patient and parents are asking about returning to activities. What is your recommended plan?",
                choices: ["Continue current immobilization (cast/rigid brace) for another 3-4 weeks","Transition to removable splint for daily wear (restrict contact sports & high-risk play) for another 6 weeks","Can return to non-contact sports with a protective brace for 6 weeks","Full clearance: Can return to all activities and sports without limitations"]
            }
        ]
    },

    {
        id: "13",
        subQuestions: [
            {
                id: "13.1",
                image: "images/15M (2).png",
                context: "Review the PA and lateral wrist X-rays of a 11-year old female who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the imaging, how would you classify the distal radius fracture morphology?",
                choices: ["Torus / Buckle fracture","Greenstick fracture","Non/minimally displaced Complete Fracture","Physeal Fracture (Salter-Harris)","No Acute Fracture Identified"]
            },
            {
                id: "13.2",
                stem: "Based on the clinical history and imaging findings, which treatment options are acceptable for this fracture pattern?",
                choices: ["Removable brace","Cast (no reduction)","Closed reduction and casting","Closed reduction in the OR and pinning","Open reduction and internal fixation"]
            },
            {
                id: "13.3",
                image: "images/15M (2)_reduction.png",
                stem: "Based on the following image, is this an acceptable reduction?",
                choices: ["Yes","No"]
            },
            {
                id: "13.4",
                image: "images/15M (2)_7m.png",
                stem: "Review the 7-month follow-up wrist X-rays provided. The patient and parents are asking about returning to activities. What is your recommended plan?",
                choices: ["Continue current immobilization (cast/rigid brace) for another 3-4 weeks","Transition to removable splint for daily wear (restrict contact sports & high-risk play) for another 6 weeks","Can return to non-contact sports with a protective brace for 6 weeks","Full clearance: Can return to all activities and sports without limitations"]
            }
        ]
    },

    {
        id: "14",
        subQuestions: [
            {
                id: "14.1",
                image: "images/5M (2).png",
                context: "Review the PA and lateral wrist X-rays of a 5-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the imaging, how would you classify the distal radius fracture morphology?",
                choices: ["Torus / Buckle fracture","Greenstick fracture","Non/minimally displaced Complete Fracture","Physeal Fracture (Salter-Harris)","No Acute Fracture Identified"]
            },
            {
                id: "14.2",
                stem: "Based on the clinical history and imaging findings, which treatment options are acceptable for this fracture pattern?",
                choices: ["Removable brace","Cast (no reduction)","Closed reduction and casting","Closed reduction in the OR and pinning","Open reduction and internal fixation"]
            },
            {
                id: "14.3",
                image: "images/5M (2)_reduction.png",
                stem: "Based on the following image, is this an acceptable reduction?",
                choices: ["Yes","No"]
            },
            {
                id: "14.4",
                image: "images/5M (2)_8w.png",
                stem: "Review the 8-week follow-up wrist X-rays provided. The patient and parents are asking about returning to activities. What is your recommended plan?",
                choices: ["Continue current immobilization (cast/rigid brace) for another 3-4 weeks","Transition to removable splint for daily wear (restrict contact sports & high-risk play) for another 6 weeks","Can return to non-contact sports with a protective brace for 6 weeks","Full clearance: Can return to all activities and sports without limitations"]
            }
        ]
    },

    {
        id: "15",
        subQuestions: [
            {
                id: "15.1",
                image: "images/4M.png",
                context: "Review the PA and lateral wrist X-rays of a 4-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the imaging, how would you classify the distal radius fracture morphology?",
                choices: ["Torus / Buckle fracture","Greenstick fracture","Non/minimally displaced Complete Fracture","Physeal Fracture (Salter-Harris)","No Acute Fracture Identified"]
            },
            {
                id: "15.2",
                stem: "Based on the clinical history and imaging findings, which treatment options are acceptable for this fracture pattern?",
                choices: ["Removable brace","Cast (no reduction)","Closed reduction and casting","Closed reduction in the OR and pinning","Open reduction and internal fixation"]
            },
            {
                id: "15.3",
                image: "images/4M_reduction.png",
                stem: "Based on the following image, is this an acceptable reduction?",
                choices: ["Yes","No"]
            },
            {
                id: "15.4",
                image: "images/4M_8w.png",
                stem: "Review the 8-week follow-up wrist X-rays provided. The patient and parents are asking about returning to activities. What is your recommended plan?",
                choices: ["Continue current immobilization (cast/rigid brace) for another 3-4 weeks","Transition to removable splint for daily wear (restrict contact sports & high-risk play) for another 6 weeks","Can return to non-contact sports with a protective brace for 6 weeks","Full clearance: Can return to all activities and sports without limitations"]
            }
        ]
    },

    {
        id: "16",
        subQuestions: [
            {
                id: "16.1",
                image: "images/7F.png",
                context: "Review the PA and lateral wrist X-rays of a 7-year old female who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the imaging, how would you classify the distal radius fracture morphology?",
                choices: ["Torus / Buckle fracture","Greenstick fracture","Non/minimally displaced Complete Fracture","Physeal Fracture (Salter-Harris)","No Acute Fracture Identified"]
            },
            {
                id: "16.2",
                stem: "Based on the clinical history and imaging findings, which treatment options are acceptable for this fracture pattern?",
                choices: ["Removable brace","Cast (no reduction)","Closed reduction and casting","Closed reduction in the OR and pinning","Open reduction and internal fixation"]
            },
            {
                id: "16.3",
                image: "images/7F_reduction.png",
                stem: "Based on the following image, is this an acceptable reduction?",
                choices: ["Yes","No"]
            },
            {
                id: "16.4",
                image: "images/7F_6m.png",
                stem: "Review the 6-month follow-up wrist X-rays provided. The patient and parents are asking about returning to activities. What is your recommended plan?",
                choices: ["Continue current immobilization (cast/rigid brace) for another 3-4 weeks","Transition to removable splint for daily wear (restrict contact sports & high-risk play) for another 6 weeks","Can return to non-contact sports with a protective brace for 6 weeks","Full clearance: Can return to all activities and sports without limitations"]
            }
        ]
    },

    {
        id: "17",
        subQuestions: [
            {
                id: "17.1",
                image: "images/12M (2).png",
                context: "Review the PA and lateral wrist X-rays of a 12-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the imaging, how would you classify the distal radius fracture morphology?",
                choices: ["Torus / Buckle fracture","Greenstick fracture","Non/minimally displaced Complete Fracture","Physeal Fracture (Salter-Harris)","No Acute Fracture Identified"]
            },
            {
                id: "17.2",
                stem: "Based on the clinical history and imaging findings, which treatment options are acceptable for this fracture pattern?",
                choices: ["Removable brace","Cast (no reduction)","Closed reduction and casting","Closed reduction in the OR and pinning","Open reduction and internal fixation"]
            },
            {
                id: "17.3",
                image: "images/12M (2)_reduction.png",
                stem: "Based on the following image, is this an acceptable reduction?",
                choices: ["Yes","No"]
            },
            {
                id: "17.4",
                image: "images/12M (2)_3m.png",
                stem: "Review the 3-month follow-up wrist X-rays provided. The patient and parents are asking about returning to activities. What is your recommended plan?",
                choices: ["Continue current immobilization (cast/rigid brace) for another 3-4 weeks","Transition to removable splint for daily wear (restrict contact sports & high-risk play) for another 6 weeks","Can return to non-contact sports with a protective brace for 6 weeks","Full clearance: Can return to all activities and sports without limitations"]
            }
        ]
    },

    {
        id: "18",
        subQuestions: [
            {
                id: "18.1",
                image: "images/6F (3).png",
                context: "Review the PA and lateral wrist X-rays of a 6-year old female who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the imaging, how would you classify the distal radius fracture morphology?",
                choices: ["Torus / Buckle fracture","Greenstick fracture","Non/minimally displaced Complete Fracture","Physeal Fracture (Salter-Harris)","No Acute Fracture Identified"]
            },
            {
                id: "18.2",
                stem: "Based on the clinical history and imaging findings, which treatment options are acceptable for this fracture pattern?",
                choices: ["Removable brace","Cast (no reduction)","Closed reduction and casting","Closed reduction in the OR and pinning","Open reduction and internal fixation"]
            },
            {
                id: "18.3",
                image: "images/6F (3)_reduction.png",
                stem: "Based on the following image, is this an acceptable reduction?",
                choices: ["Yes","No"]
            },
            {
                id: "18.4",
                image: "images/6F (3)_6w.png",
                stem: "Review the 6-week follow-up wrist X-rays provided. The patient and parents are asking about returning to activities. What is your recommended plan?",
                choices: ["Continue current immobilization (cast/rigid brace) for another 3-4 weeks","Transition to removable splint for daily wear (restrict contact sports & high-risk play) for another 6 weeks","Can return to non-contact sports with a protective brace for 6 weeks","Full clearance: Can return to all activities and sports without limitations"]
            }
        ]
    },

    {
        id: "19",
        subQuestions: [
            {
                id: "19.1",
                image: "images/11M.png",
                context: "Review the PA and lateral wrist X-rays of a 11-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the imaging, how would you classify the distal radius fracture morphology?",
                choices: ["Torus / Buckle fracture","Greenstick fracture","Non/minimally displaced Complete Fracture","Physeal Fracture (Salter-Harris)","No Acute Fracture Identified"]
            },
            {
                id: "19.2",
                stem: "Based on the clinical history and imaging findings, which treatment options are acceptable for this fracture pattern?",
                choices: ["Removable brace","Cast (no reduction)","Closed reduction and casting","Closed reduction in the OR and pinning","Open reduction and internal fixation"]
            },
            {
                id: "19.3",
                image: "images/11M_reduction.png",
                stem: "Based on the following image, is this an acceptable reduction?",
                choices: ["Yes","No"]
            },
            {
                id: "19.4",
                image: "images/11M_3m.png",
                stem: "Review the 3-month follow-up wrist X-rays provided. The patient and parents are asking about returning to activities. What is your recommended plan?",
                choices: ["Continue current immobilization (cast/rigid brace) for another 3-4 weeks","Transition to removable splint for daily wear (restrict contact sports & high-risk play) for another 6 weeks","Can return to non-contact sports with a protective brace for 6 weeks","Full clearance: Can return to all activities and sports without limitations"]
            }
        ]
    },

    {
        id: "20",
        subQuestions: [
            {
                id: "20.1",
                image: "images/4M (2).png",
                context: "Review the PA and lateral wrist X-rays of a 4-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the imaging, how would you classify the distal radius fracture morphology?",
                choices: ["Torus / Buckle fracture","Greenstick fracture","Non/minimally displaced Complete Fracture","Physeal Fracture (Salter-Harris)","No Acute Fracture Identified"]
            },
            {
                id: "20.2",
                stem: "Based on the clinical history and imaging findings, which treatment options are acceptable for this fracture pattern?",
                choices: ["Removable brace","Cast (no reduction)","Closed reduction and casting","Closed reduction in the OR and pinning","Open reduction and internal fixation"]
            },
            {
                id: "20.3",
                image: "images/4M (2)_reduction.png",
                stem: "Based on the following image, is this an acceptable reduction?",
                choices: ["Yes","No"]
            },
            {
                id: "20.4",
                image: "images/4M (2)_5m.png",
                stem: "Review the 5-month follow-up wrist X-rays provided. The patient and parents are asking about returning to activities. What is your recommended plan?",
                choices: ["Continue current immobilization (cast/rigid brace) for another 3-4 weeks","Transition to removable splint for daily wear (restrict contact sports & high-risk play) for another 6 weeks","Can return to non-contact sports with a protective brace for 6 weeks","Full clearance: Can return to all activities and sports without limitations"]
            }
        ]
    }

];


// =====================================================
// GLOBAL STATE
// =====================================================

var currentQuestionIndex = 0;
var selectedAnswers = {};
var questionStartTime = null;
var surveyResponses = [];
var participantInfo = {};


// =====================================================
// WAIT FOR PAGE TO LOAD
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("begin-survey-button")
        .addEventListener("click", function () {
            showPage("consent-page");
        });

    document.getElementById("consent-next-button")
        .addEventListener("click", function () {
            showPage("demographics-page");
        });

    document.getElementById("anonymous-checkbox")
        .addEventListener("change", function () {
            if (this.checked) {
                document.getElementById("demographic-form").style.display = "none";
                document.getElementById("anonymous-message").style.display = "block";
                document.getElementById("demographics-error").style.display = "none";
            } else {
                document.getElementById("demographic-form").style.display = "block";
                document.getElementById("anonymous-message").style.display = "none";
            }
        });

    document.getElementById("institution")
        .addEventListener("change", function () {
            if (this.value === "Other") {
                document.getElementById("other-institution-group").style.display = "block";
            } else {
                document.getElementById("other-institution-group").style.display = "none";
                document.getElementById("other-institution").value = "";
            }
        });

    document.getElementById("role")
        .addEventListener("change", function () {
            document.getElementById("attending-fields").style.display = "none";
            document.getElementById("pa-np-fields").style.display = "none";
            document.getElementById("medical-student-fields").style.display = "none";
            document.getElementById("resident-fields").style.display = "none";
            if (this.value === "Attending")
                document.getElementById("attending-fields").style.display = "block";
            if (this.value === "Physician Assistant" || this.value === "Nurse Practitioner")
                document.getElementById("pa-np-fields").style.display = "block";
            if (this.value === "Medical Student")
                document.getElementById("medical-student-fields").style.display = "block";
            if (this.value === "Resident")
                document.getElementById("resident-fields").style.display = "block";
        });

    document.getElementById("demographics-next-button")
        .addEventListener("click", function () {

            var anonymous = document.getElementById("anonymous-checkbox").checked;

            if (anonymous) {
                participantInfo = { name: "Anonymous", email: "", institution: "", role: "", yearsExp: "", fellowship: "" };
                startSurvey();
                return;
            }

            var valid = true;
            if (document.getElementById("participant-name").value.trim() === "") valid = false;
            if (document.getElementById("participant-email").value.trim() === "") valid = false;
            if (document.getElementById("institution").value === "") valid = false;
            if (document.getElementById("institution").value === "Other" &&
                document.getElementById("other-institution").value.trim() === "") valid = false;
            if (document.getElementById("role").value === "") valid = false;
            if (document.getElementById("role").value === "Attending" &&
                document.getElementById("years-experience").value === "") valid = false;
            if ((document.getElementById("role").value === "Physician Assistant" ||
                 document.getElementById("role").value === "Nurse Practitioner") &&
                document.getElementById("pa-np-years-experience").value === "") valid = false;
            if (document.getElementById("role").value === "Medical Student" &&
                document.getElementById("medical-student-year").value === "") valid = false;
            if (document.getElementById("role").value === "Resident" &&
                document.getElementById("resident-year").value === "") valid = false;

            if (!valid) {
                document.getElementById("demographics-error").style.display = "block";
                return;
            }

            // Save participant info
            var role = document.getElementById("role").value;
            var yearsExp = "";
            if (role === "Attending")
                yearsExp = document.getElementById("years-experience").value;
            if (role === "Physician Assistant" || role === "Nurse Practitioner")
                yearsExp = document.getElementById("pa-np-years-experience").value;

            // Collect fellowship checkboxes
            var fellowship = "";
            if (role === "Attending") {
                var checked = document.querySelectorAll('input[name="fellowship"]:checked');
                var fellowshipValues = [];
                for (var i = 0; i < checked.length; i++) {
                    fellowshipValues.push(checked[i].value);
                }
                fellowship = fellowshipValues.join(", ");
            }

            participantInfo = {
                name:        document.getElementById("participant-name").value.trim(),
                email:       document.getElementById("participant-email").value.trim(),
                institution: document.getElementById("institution").value,
                role:        role,
                yearsExp:    yearsExp,
                fellowship:  fellowship
            };

            document.getElementById("demographics-error").style.display = "none";
            startSurvey();
        });
});


// =====================================================
// SHOW PAGE
// =====================================================

function showPage(pageId) {
    var pages = document.querySelectorAll(".page");
    pages.forEach(function (page) { page.classList.remove("active"); });
    document.getElementById(pageId).classList.add("active");
    window.scrollTo(0, 0);
}


// =====================================================
// START SURVEY
// =====================================================

var activeQuestions = [];

function startSurvey() {
    currentQuestionIndex = 0;
    selectedAnswers = {};
    surveyResponses = [];

    // Show all questions in fixed order
    activeQuestions = questionBank.slice();

    showPage("survey-question-page");
    renderQuestion();
}


// =====================================================
// RENDER QUESTION
// =====================================================

function renderQuestion() {

    var question = activeQuestions[currentQuestionIndex];
    var isGrouped = question.subQuestions !== undefined;
    var container = document.getElementById("survey-question-container");

    selectedAnswers = {};
    container.innerHTML = "";

    var title = document.createElement("h2");
    title.textContent = "Question " + (currentQuestionIndex + 1);
    container.appendChild(title);

    if (isGrouped) {
        for (var i = 0; i < question.subQuestions.length; i++) {
            container.appendChild(buildBlock(question.subQuestions[i], true, currentQuestionIndex + 1, i + 1));
        }
    } else {
        container.appendChild(buildBlock(question, false, currentQuestionIndex + 1, null));
    }

    var btnDiv = document.createElement("div");
    btnDiv.className = "survey-next-button-container";

    var btn = document.createElement("button");
    btn.className = "primary-button";
    btn.type = "button";
    btn.textContent = (currentQuestionIndex === activeQuestions.length - 1)
        ? "Submit Survey"
        : "Next";

    btn.addEventListener("click", handleNext);
    btnDiv.appendChild(btn);
    container.appendChild(btnDiv);

    var progress = Math.round(((currentQuestionIndex + 1) / activeQuestions.length) * 100);
    var progressDiv = document.createElement("div");
    progressDiv.className = "survey-progress-container";
    progressDiv.innerHTML =
        '<div class="progress-bar-wrapper">' +
            '<div class="survey-progress-bar" style="width:' + progress + '%"></div>' +
        '</div>' +
        '<span class="survey-progress-text">' + progress + '%</span>';
    container.appendChild(progressDiv);

    questionStartTime = performance.now();
}


// =====================================================
// BUILD A QUESTION BLOCK
// =====================================================

function buildBlock(q, showLabel, questionNumber, subNumber) {

    var block = document.createElement("div");
    block.className = "sub-question-block";

    if (showLabel) {
        var label = document.createElement("h3");
        label.className = "sub-question-label";
        label.textContent = questionNumber + "." + subNumber;
        block.appendChild(label);
    }

    if (q.context) {
        var context = document.createElement("p");
        context.className = "question-context";
        context.textContent = q.context;
        block.appendChild(context);
    }

    var stem = document.createElement("p");
    stem.className = "question-stem";
    stem.textContent = q.stem;
    block.appendChild(stem);

    if (q.image) {
        var imgDiv = document.createElement("div");
        imgDiv.className = "question-image-container";
        var img = document.createElement("img");
        img.src = q.image;
        img.alt = "Radiographic image for survey question";
        imgDiv.appendChild(img);
        block.appendChild(imgDiv);
    }

    var grid = document.createElement("div");
    grid.className = "answer-grid";

    (function (questionId, choices, answerGrid) {
        for (var i = 0; i < choices.length; i++) {
            (function (index) {
                var btn = document.createElement("button");
                btn.className = "answer-choice";
                btn.type = "button";
                btn.textContent = choices[index];
                btn.addEventListener("click", function () {
                    var allBtns = answerGrid.querySelectorAll(".answer-choice");
                    for (var j = 0; j < allBtns.length; j++) {
                        allBtns[j].classList.remove("selected");
                    }
                    btn.classList.add("selected");
                    selectedAnswers[questionId] = index;

                    // Auto-scroll to next block or Next button
                    var blocks = document.querySelectorAll(".sub-question-block");
                    var currentBlock = answerGrid.closest(".sub-question-block");
                    var blockIndex = Array.prototype.indexOf.call(blocks, currentBlock);
                    var nextBlock = blocks[blockIndex + 1];

                    setTimeout(function () {
                        if (nextBlock) {
                            nextBlock.scrollIntoView({ behavior: "smooth", block: "start" });
                        } else {
                            document.querySelector(".survey-next-button-container")
                                .scrollIntoView({ behavior: "smooth", block: "center" });
                        }
                    }, 200);
                });
                answerGrid.appendChild(btn);
            })(i);
        }
    })(q.id, q.choices, grid);

    block.appendChild(grid);
    return block;
}


// =====================================================
// HANDLE NEXT
// =====================================================

function handleNext() {

    var question = activeQuestions[currentQuestionIndex];
    var isGrouped = question.subQuestions !== undefined;

    if (isGrouped) {
        for (var i = 0; i < question.subQuestions.length; i++) {
            if (selectedAnswers[question.subQuestions[i].id] === undefined) {
                alert("Please answer all parts before continuing.");
                return;
            }
        }
    } else {
        if (selectedAnswers[question.id] === undefined) {
            alert("Please select an answer before continuing.");
            return;
        }
    }

    var timeSeconds = Number(((performance.now() - questionStartTime) / 1000).toFixed(2));

    var presentedQuestionNumber = currentQuestionIndex + 1;

    if (isGrouped) {
        for (var i = 0; i < question.subQuestions.length; i++) {
            var sub = question.subQuestions[i];
            surveyResponses.push({
                presentedAs:    "Q" + presentedQuestionNumber + "." + (i + 1),
                questionId:     sub.id,
                questionLabel:  sub.label,
                selectedAnswer: sub.choices[selectedAnswers[sub.id]],
                timeSeconds:    timeSeconds
            });
        }
    } else {
        surveyResponses.push({
            presentedAs:    "Q" + presentedQuestionNumber,
            questionId:     question.id,
            questionLabel:  question.label,
            selectedAnswer: question.choices[selectedAnswers[question.id]],
            timeSeconds:    timeSeconds
        });
    }

    if (currentQuestionIndex === activeQuestions.length - 1) {
        submitToGoogleSheets();
    } else {
        currentQuestionIndex++;
        renderQuestion();
        window.scrollTo(0, 0);
    }
}


// =====================================================
// SUBMIT TO GOOGLE SHEETS
// =====================================================

function submitToGoogleSheets() {

    // Show completion page immediately so user isn't waiting
    showPage("completion-page");

    var payload = {
        name:        participantInfo.name,
        email:       participantInfo.email,
        institution: participantInfo.institution,
        role:        participantInfo.role,
        yearsExp:    participantInfo.yearsExp,
        fellowship:  participantInfo.fellowship,
        responses:   surveyResponses
    };

    console.log("Submitting:", payload);

    fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload)
    })
    .then(function (res) { return res.json(); })
    .then(function (data) {
        console.log("Saved successfully:", data);
    })
    .catch(function (err) {
        console.error("Save failed:", err);
    });
}
