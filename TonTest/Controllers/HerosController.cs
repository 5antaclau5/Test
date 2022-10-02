using Microsoft.AspNetCore.Mvc;
using RestSharp;
using System;
using System.Collections.Generic;

namespace TonTest.Controllers
{
    [ApiController]
    [Route("/api/[controller]/[action]")]
    public class HerosController : Controller
    {
        [HttpGet]
        public List<C_Hero> Get_Hero()
        {
            List<C_Hero> lstHero = new List<C_Hero>();

            lstHero.Add(new C_Hero() { Heroname = "Dr Nice" });
            lstHero.Add(new C_Hero() { Heroname = "necromancer" });
            lstHero.Add(new C_Hero() { Heroname = "Bombasto" });
            lstHero.Add(new C_Hero() { Heroname = "Celeritas" });
            lstHero.Add(new C_Hero() { Heroname = "Magneta" });
            lstHero.Add(new C_Hero() { Heroname = "RubberMan" });
            lstHero.Add(new C_Hero() { Heroname = "Dynama" });
            lstHero.Add(new C_Hero() { Heroname = "DrIO" });
            lstHero.Add(new C_Hero() { Heroname = "Magma" });
            lstHero.Add(new C_Hero() { Heroname = "Tornado" });

            return lstHero;
        }

        [HttpGet]
        public List<C_lst> Get_lst()
        {
            var client = new RestClient("https://jsonplaceholder.typicode.com");
            var request = new RestRequest("posts", Method.Get);

            return client.Execute<List<C_lst>>(request).Data;
        }

        [HttpPost]
        public Re_Areatriangle Areatriangle(C_Areatriangle data)
        {
            return new Re_Areatriangle { area = (0.5 * data.BaseAreatriangle * data.HighAreatriangle) };
        }

        [HttpPost]
        public C_Citizen GetCitizen(Pr_CitizenID data)
        {
            bool success = false;
            string error_code = "001";
            string error_msg = "Citizen_id require";
            if (!string.IsNullOrEmpty(data.CitizenID)) // กรณี ไม่ได้ระบุ Citizen_ID ไม่ถูกต้อง
            {
                string CitizenID = data.CitizenID;
                error_msg = "Citizen_id invalid"; // กรณี ระบุ Citizen_ID ไม่ถูกต้อง

                if (CitizenID.Length == 13) // ตรวจสอบว่า CitizenID ครบ 13 ตัวหรือไม่
                {
                    char lastCitizen = CitizenID[CitizenID.Length - 1]; // หาตำแหน่งสุดท้าย
                    string removelastCitizen = CitizenID.Remove(12); // ขั้นตอนที่ 1 ตัดเอา 12 หลัก

                    int sum = 0, Multiplier = CitizenID.Length;

                    for (int i = 0; i < removelastCitizen.Length; i++) // ขั้นตอนที่ 2
                    {
                        sum += (Int32.Parse(removelastCitizen[i] + "") * Multiplier); // ขั้นตอนที่ 3

                        Multiplier--;
                    }
                    sum %= 11; // ขั้นตอนที่ 4

                    int Digit = 11 - sum; // ขั้นตอนที่ 5

                    if (Digit.ToString()[Digit.ToString().Length - 1] == lastCitizen) // Check Digit
                    {
                        // กรณี ระบุ Citizen_ID มาถูกต้อง
                        success = !success;
                        error_code = "200";
                        error_msg = "";
                    }
                }
            }

            return new C_Citizen
            {
                success = success,
                error_code = error_code,
                error_msg = error_msg
            }; ;
        }
        public class Pr_CitizenID
        {
            public string CitizenID { get; set; }
        }
        public class Re_Areatriangle
        {
            public double area { get; set; }
        }
        public class C_Hero
        {
            public string Heroname { get; set; }
        }
        public class C_lst
        {
            public int userId { get; set; }
            public int id { get; set; }
            public string title { get; set; }
            public string body { get; set; }
        }
        public class C_Areatriangle
        {
            public int BaseAreatriangle { get; set; }
            public int HighAreatriangle { get; set; }
        }
        public class C_Citizen
        {
            public bool success { get; set; }
            public string error_code { get; set; }
            public string error_msg { get; set; }
        }

    }
}
