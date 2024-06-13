import { Seq, toJS } from "./node_modules/immutable/dist/immutable";

export const printBestStudents = (students) => {
    const bestStudent = Seq(student).filter((grade) => student.score >= 70)
                                    .map((student) => (
                                        {
                                            score: student.score,
                                            firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
                                            lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1)
                                        }
                                    ))
    console.log(bestStudent.toJS())

}