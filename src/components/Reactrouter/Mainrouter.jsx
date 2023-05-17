import React from 'react'

import Home from '../../pages/PublicUser/Home'

import { Routes, Route } from 'react-router-dom' 


import Volunteer from '../../pages/Volunteer/Volunteer'
import Student from '../../pages/Student/Student'
import Alumni from '../../pages/Alumni/Alumni'
import Portfoliodetails from '../../pages/Portfolio/Portfoliodetails'
import Portfolio from '../../pages/Portfolio/Portfolio'
import Register from '../../pages/Register/Register'


import Loginn from '../Login/Loginn'

import RegCoo from '../../pages/Register/RegCoo'
import RegVol from '../../pages/Register/RegVol'
import RegStud from '../../pages/Register/RegStud'
import RegAlu from '../../pages/Register/RegAlu'

import ViewProfilee from '../../pages/Volunteer/ViewProfilee'
import UpdateProfilee from '../../pages/Volunteer/UpdateProfilee'
import Viewattendence from '../../pages/Volunteer/Viewattendence'
import ViewIndActivity from '../../pages/Volunteer/ViewIndActivity'
import ViewGrpActivity from '../../pages/Volunteer/ViewGrpActivity'
import IndividualMark from '../../pages/Volunteer/IndividualMark'
import GroupMark from '../../pages/Volunteer/GroupMark'
import Notification from '../../pages/Volunteer/Notification'
import VolAddNotification from '../../pages/Volunteer/VolAddNotification'
import VolViewAddedNotification from '../../pages/Volunteer/VolViewAddedNotification'
import VolGallery from '../../pages/Volunteer/VolGallery'
import VolAddPPost from '../../pages/Volunteer/VolAddPPost'
import VolViewAddedPost from '../../pages/Volunteer/VolViewAddedPost'
import VolAddSuggestion from '../../pages/Volunteer/VolAddSuggestion'
import VolViewSuggestion from '../../pages/Volunteer/VolViewSuggestion'
import CampDetails from '../../pages/Volunteer/CampDetails'

import AluViewProfile from '../../pages/Alumni/AluViewProfile'
import AluUpdateProfilee from '../../pages/Alumni/AluUpdateProfilee'
import AluAllNoti from '../../pages/Alumni/AluAllNoti'
import AluAddNotification from '../../pages/Alumni/AluAddNotification'
import AlumanageNotification from '../../pages/Alumni/AlumanageNotification'
import AluViewGallery from '../../pages/Alumni/AluViewGallery'
import AluUploadPPost from '../../pages/Alumni/AluUploadPPost'
import AlumanagePPost from '../../pages/Alumni/AlumanagePPost'
import AlAddSuggestion from '../../pages/Alumni/AlAddSuggestion'
import AlViewSuggestion from '../../pages/Alumni/AlViewSuggestion'



import TestDetails from '../../pages/Student/TestDetails'
import InterviewDetails from '../../pages/Student/InterviewDetails'

import Adminnn from '../../pages/Admin/Adminnn'
import Approve from '../../pages/Admin/Approve'
import ProfileCoo from '../../pages/Admin/ProfileCoo'
import Adsuggestionn from '../../pages/Admin/Adsuggestionn'
import AdVol from '../../pages/Admin/AdVol'
import Coordinator from '../../pages/Coordinator/Coordinator'
import AllStudents from '../../pages/Coordinator/AllStudents'
import Testdetails from '../../pages/Coordinator/Testdetails'
import Interviewdetails from '../../pages/Coordinator/Interviewdetails'
import AddAttentence from '../../pages/Coordinator/AddAttentence'
import AddVolgrp from '../../pages/Coordinator/AddVolgrp'
import AddVolToGrp from '../../pages/Coordinator/AddVolToGrp'
import AssignGroupActivity from '../../pages/Coordinator/AssignGroupActivity'
import ViewAssignGroupActivity from '../../pages/Coordinator/ViewAssignGroupActivity'






const Mainrouter = () => {
  return (
    <div>
        <Routes>
           <Route path='/' element={<Home/>} />
           
           <Route path='/register' element={<Register/>} />

           <Route path='/coordinator' element={<Coordinator/>} />
           <Route path='/students' element={<AllStudents/>} />
           
           <Route path='/volunteer' element={<Volunteer/>} />
           <Route path='/student' element={<Student/>} />
           <Route path='/alumni' element={<Alumni/>} />
           <Route path='/portfolio' element={<Portfolio/>}/>
           <Route path='/portfoliodetails' element={<Portfoliodetails/>}/> 
           
           
           <Route path='/loginn' element={<Loginn/>} />
           
           <Route path='/regcoo' element={<RegCoo/>} />
           <Route path='/regvol' element={<RegVol/>} />
           <Route path='/regstud' element={<RegStud/>} />
           <Route path='/regalu' element={<RegAlu/>} />

           <Route path='/volprofile' element={<ViewProfilee/>} />
           <Route path='/volupdateprofile' element={<UpdateProfilee/>} />
           <Route path='/volattendence' element={<Viewattendence/>} />
           <Route path='/volindactivity' element={<ViewIndActivity/>} />
           <Route path='/volgrpactivity' element={<ViewGrpActivity/>} />
           <Route path='/volmarkind' element={<IndividualMark/>} />
           <Route path='/volmarkgrp' element={<GroupMark/>} />
           <Route path='/volnotification' element={<Notification/>} />
           <Route path='/voladdnotification' element={<VolAddNotification/>} />
           <Route path='/voladdednotifi' element={<VolViewAddedNotification/>} />
           <Route path='/volviewgallery' element={<VolGallery/>} />
           <Route path='/voladdpost' element={<VolAddPPost/>} />
           <Route path='/volmanagepost' element={<VolViewAddedPost/>} />
           <Route path='/voladdsugg' element={<VolAddSuggestion/>} />
           <Route path='/volviewsugg' element={<VolViewSuggestion/>} />
           <Route path='/volcamp' element={<CampDetails/>} />

           <Route path='/aluprofile' element={<AluViewProfile/>} />
           <Route path='/alupdateprofile' element={<AluUpdateProfilee/>}/>
           <Route path='/aluallnotification' element={<AluAllNoti/>}/>
           <Route path='/aluaddnoti' element={<AluAddNotification/>}/>
           <Route path='/alumanagenoti' element={<AlumanageNotification/>}/>
           <Route path='/aluviewgallery' element={<AluViewGallery/>}/>
           <Route path='/aluploadpost' element={<AluUploadPPost/>}/>
           <Route path='/alumanagepost' element={<AlumanagePPost/>}/>
           <Route path='/aluaddsugg' element={<AlAddSuggestion/>}/>
           <Route path='/aluviewsugg'element={<AlViewSuggestion/>}/>

           

           <Route path='/stutest' element={<TestDetails/>} />
           <Route path='/stuinterview' element={<InterviewDetails/>}/>

           <Route path='/adminnn' element={<Adminnn/>}/>
           <Route path='/adapprove' element={<Approve/>}/>
           <Route path='/adprofile' element={<ProfileCoo/>}/>
           <Route path='/adsuggestion' element={<Adsuggestionn/>}/>
           <Route path='/advolunteer' element={<AdVol/>}/>
           <Route path='/addtestdetails' element={<Testdetails/>}/>
           <Route path='/addintdetails' element={<Interviewdetails/>}/>
           <Route path='/addvolattentence' element={<AddAttentence/>}/>
           <Route path='/addvolgrp' element={<AddVolgrp/>}/>
           <Route path='/addvoltogrp' element={<AddVolToGrp/>}/>
           <Route path='/assigngrp' element={<AssignGroupActivity/>}/>
           <Route path='/viewgrpactivity' element={<ViewAssignGroupActivity/>}/>


           </Routes>
    </div>
  )
}

export default Mainrouter