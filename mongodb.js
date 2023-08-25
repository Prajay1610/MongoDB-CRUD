// NOTE: UNCOMMENT TO USE AND SEE RESULTS

const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://dev-prajay:Prajay1610@cluster0.3cznrpx.mongodb.net/?retryWrites=true&w=majority";

//create new client
const client = new MongoClient(url);
const dbConnect = async () => {
  try {
    //connect to db
    await client.connect();
    console.log("DB Connnected Successfully");

    //create new db
    const db = client.db("school");
    //create collection
    const students = db.collection("students");

    //create  document(student)

    // const student1 = await students.insertOne({
    //   name: "Abhijeet",
    //   email: "abhi@gmail.com",
    //   city: "nashik",
    // });

    //create multiple students/records

    // const student2 = await students.insertMany([
    //   { name: "Niranjan", email: "xyz@gmail.com", city: "ahmednagar" },
    //   { name: "Vishi", email: "vishi@gmail.com", city: "DR" },
    // ]);
    // console.log(student2);

    //find all students

    // const allStudents = await students.find().toArray();
    // console.log(allStudents);

    //find a student by name Prajay--(only one o/p)
    // const foundStudent = await students.findOne({ name: "Prajay" });
    // console.log(foundStudent);

    //find all students from nashik--(multiple o/p)

    // const foundSts = await students.find({ city: "nashik" }).toArray();
    // console.log(foundSts);

    //update record

    // const updatedStudent = await students.updateOne(
    //   { name: "Vishi" },
    //   { $set: { city: "nashik" } }
    // );
    // console.log(updatedStudent);

    //update multiple fields

    // const updatestd = await students.updateMany(
    //   { city: "nashik" },
    //   { $set: { city: "nasik" } }
    // );
    // console.log(updatestd);
    //delete a record
    const deletedStudent = await students.deleteOne({ name: "Abhijeet" }); //case-sensitive
    console.log(deletedStudent);
  } catch (error) {
    console.log(error);
  }
};

dbConnect();
