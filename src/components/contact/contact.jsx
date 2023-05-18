import React,{useRef}from 'react'
import './contact.scss'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser';
import { EarthCanvas } from '../canvas';
import { motion } from 'framer-motion';
import { sendForm } from '@emailjs/browser';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import star from '../../assets';


// export const ContactUs = () => {
//   const form = useRef();
  

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
            // props.e.preventDefault();
            console.log(e);
        
            emailjs.sendForm('service_oojvsvy', 'template_ms1u4dt', e.target, 'ekniWTeYU3lq2snyV')
              .then((result) => {
                  console.log(result.text);
                  toast.success("Email sent successfully");
              }, (error) => {
                  console.log(error.text);
                  toast.error("Email not sent, Pls try again")
              });
          };
    const Formik=useFormik({
        initialValues:{
            name:"",
            email:"",
            number:"",
            organization:"",
            projectdetails:"",

        },
        validationSchema:Yup.object({
            email:Yup.string().email("invalid email").required("required"),
            name:Yup.string().required("required"),
            number:Yup.number()
                   . min(1000000000,"Enter a valid number")
                   .max(9999999999,"Enter a valid number")
                   .typeError("That doesn't look like a phone number")
                   .integer("A phone number can't include a decimal point")
                   .required("required"),
            // organization:Yup.string().required("required"),
            // domain:Yup.string().required("required"),
            projectdetails:Yup.string().required("required"),
        }),
       
            //  onSubmit:(e)=>{
            //     // e.preventDefault();
            //     //   sendEmail(form);
            //     console.log(e.target);
            //     },

        });
        const handleSubmit=(e)=>{
            e.preventDefault();
            // console.log(e.target);
            sendEmail(e);
        }
    
  return (
    <div className='contact flex flex-col-reverse md:flex-row md-px-[2rem] px-3 bg-contain bg-no-repeat' >
        <div className='contact-form md:w-[60%] w-[100%] px-[3rem]'  data-aos="fade-up" >
            <ToastContainer />

            <h1>CONTACT ME</h1>
            <form ref={form} onSubmit={handleSubmit} className="form" >
                <div className='inputfield'>

                <input name="name"
                placeholder='Name'
                       type="name"
                       required
                       autoComplete='off'
                       value={Formik.values.name}
                       onChange={Formik.handleChange}
                       onBlur={Formik.handleBlur}
                />
                </div>
                {
                    Formik.touched.name&&Formik.errors.name?
                    (<p>{Formik.errors.name}</p>):null
                }
                <div className='inputfield'>

                <input name="email"
                placeholder='Email'
                       type="email"
                       required
                       autoComplete='off'
                       value={Formik.values.email}
                       onChange={Formik.handleChange}
                       onBlur={Formik.handleBlur}
                />
                </div>
                {
                    Formik.touched.email&&Formik.errors.email?
                    (<p>{Formik.errors.email}</p>):null
                }

                <div className='inputfield'>
    
                <input name="number"
                placeholder='Mobile Number'
                       type="number"
                       required
                       autoComplete='off'
                       value={Formik.values.number}
                       onChange={Formik.handleChange}
                       onBlur={Formik.handleBlur}
                />
                </div>
                {
                    Formik.touched.number&&Formik.errors.number?
                    (<p>{Formik.errors.number}</p>):null
                }
                <div className='inputfield'>
                
                <input  name="organization"
                placeholder='Organization'
                       type="organization"
                       required
                       autoComplete='off'
                       value={Formik.values.organization}
                       onChange={Formik.handleChange}
                       onBlur={Formik.handleBlur}
                />
                </div>
                {
                    Formik.touched.organization&&Formik.errors.organization?
                    (<p>{Formik.errors.organization}</p>):null
                }
                <div className='inputfield'>
                
                <textarea name="projectdetails"
                placeholder='Project Info'
                       type="projectdetails"
                       required
                       autoComplete='off'
                       value={Formik.values.projectdetails}
                       onChange={Formik.handleChange}
                       onBlur={Formik.handleBlur}
                />
                </div>
                {
                    Formik.touched.projectdetails&&Formik.errors.projectdetails?
                    (<p>{Formik.errors.projectdetails}</p>):null
                }
                <button className='form-sub' type='submit'>SUBMIT</button>
            </form>
        </div>
        <motion.div
        // variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1  md:h-[600px] h-[350px] w-[40%] my-10'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default Contact