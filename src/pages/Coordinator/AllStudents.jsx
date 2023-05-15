import React from 'react';
import NavCoordinator from '../../components/Navebar/NavCoordinator';
import ViewStudents from '../../components/Coordinator/ViewStudents';
import Footer from '../../components/Footer/Footer';

const AllStudents = () => {
    return (
        <div>
            <NavCoordinator/>
            <ViewStudents/>
            <Footer/>
        </div>
    );
}

export default AllStudents;
