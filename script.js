const customTimes = [
    { name: "Helvetica", time: "1957-01-01T13:00:00" },
    { name: "Steve Jobs", time: "1955-02-24T07:15:00" },
    { name: "EQUAL TIME", time: "0001-01-01T12:00:00" },
    { name: "세종대왕", time: "1397-05-15T16:20:00" },
    { name: "Noto Sans", time: "2014-07-14T17:39:00" },
    { name: "손흥민", time: "1992-07-08T05:55:00" },
    { name: "Dieter Rams", time: "1932-05-20T12:00:00" },
    { name: "서재영", time: "2003-05-21T02:20:00" },
    { name: "이상혁", time: "1996-05-07T13:57:30" },
    { name: "Bauhaus", time: "1919-04-01T02:15:00" },
    { name: "이동훈", time: "2003-08-22T19:48:23" },
    { name: "김민재", time: "2001-04-16T20:10:00" },
    { name: "김지훈", time: "1992-03-10T08:20:00" },
    { name: "이수진", time: "1988-07-23T14:35:00" },
    { name: "박정민", time: "2000-11-01T12:40:00" },
    { name: "최윤호", time: "1995-02-15T16:25:00" },
    { name: "장서윤", time: "1990-05-05T09:50:00" },
    { name: "홍지연", time: "1993-12-12T17:10:00" },
    { name: "강민수", time: "1985-09-17T18:05:00" },
    { name: "김유리", time: "1996-06-30T10:30:00" },
    { name: "이영호", time: "1997-08-09T07:00:00" },
    { name: "박은영", time: "1998-01-25T13:40:00" },
    { name: "오수빈", time: "2002-04-19T11:15:00" },
    { name: "송지혜", time: "1991-10-07T06:55:00" },
    { name: "최준호", time: "1994-12-03T20:30:00" },
    { name: "임지은", time: "1999-09-28T08:50:00" },
    { name: "정민호", time: "2001-01-16T15:00:00" },
    { name: "이유진", time: "1990-03-11T19:40:00" },
    { name: "김태영", time: "1987-08-01T13:25:00" },
    { name: "장미소", time: "1992-11-23T17:05:00" },
    { name: "조한솔", time: "1995-07-12T10:10:00" },
    { name: "이상훈", time: "2000-02-04T21:30:00" },
    { name: "최혜진", time: "1986-05-19T14:50:00" },
    { name: "박진영", time: "1994-09-14T09:15:00" },
    { name: "김상혁", time: "1997-06-22T08:35:00" },
    { name: "류지영", time: "1999-03-01T16:00:00" },
    { name: "정수빈", time: "1991-02-16T18:20:00" },
    { name: "홍세정", time: "1989-10-02T11:00:00" },
    { name: "조지훈", time: "2003-05-17T19:30:00" },
    { name: "손민지", time: "1996-12-21T12:00:00" },
    { name: "이성준", time: "1992-08-14T05:40:00" },
    { name: "최승현", time: "1998-04-25T07:20:00" },
    { name: "John Smith", time: "1990-01-15T08:20:00" },
{ name: "Emma Johnson", time: "1985-02-20T14:35:00" },
{ name: "Michael Williams", time: "2000-03-05T16:25:00" },
{ name: "Olivia Brown", time: "1992-07-10T09:50:00" },
{ name: "James Jones", time: "1988-11-02T17:10:00" },
{ name: "Ava Garcia", time: "1994-09-13T18:05:00" },
{ name: "David Martinez", time: "1996-12-28T10:30:00" },
{ name: "Sophia Rodriguez", time: "1993-04-18T07:00:00" },
{ name: "Benjamin Lee", time: "1987-06-11T08:50:00" },
{ name: "Isabella Harris", time: "1995-05-14T13:40:00" },
{ name: "William Clark", time: "2002-02-01T11:15:00" },
{ name: "Mia Lewis", time: "1999-08-23T06:55:00" },
{ name: "Ethan Walker", time: "1997-03-25T20:30:00" },
{ name: "Charlotte Young", time: "2001-12-03T11:15:00" },
{ name: "Lucas Hall", time: "1999-06-19T13:00:00" },
{ name: "Amelia Allen", time: "1994-10-07T18:30:00" },
{ name: "Henry Scott", time: "1992-09-22T12:00:00" },
{ name: "Harper King", time: "2000-04-11T15:40:00" },
{ name: "Alexander Wright", time: "1991-05-30T17:25:00" },
{ name: "Evelyn Green", time: "1998-07-16T09:05:00" },
{ name: "Sebastian Adams", time: "1995-11-27T14:00:00" },
{ name: "Ella Nelson", time: "1989-01-05T10:15:00" },
{ name: "Jack Carter", time: "1992-08-22T13:00:00" },
{ name: "Grace Mitchell", time: "2003-09-14T18:00:00" },
{ name: "Liam Perez", time: "1997-05-17T07:30:00" },
{ name: "Zoe Roberts", time: "1993-03-28T11:25:00" },
{ name: "Oscar Turner", time: "1996-10-09T19:50:00" },
{ name: "Lily Phillips", time: "1998-06-03T16:15:00" },
{ name: "Daniel Mitchell", time: "1991-12-04T08:40:00" },
{ name: "Chloe Evans", time: "2000-01-20T09:15:00" },
{ name: "김현수", time: "1995-02-11T07:40:00" },
{ name: "이수민", time: "1993-09-23T18:30:00" },
{ name: "박지호", time: "1996-06-04T13:10:00" },
{ name: "최지은", time: "2000-03-30T15:55:00" },
{ name: "장민석", time: "1988-11-14T16:25:00" },
{ name: "홍다희", time: "1997-05-27T14:50:00" },
{ name: "강다솔", time: "1994-12-12T10:05:00" },
{ name: "김도현", time: "1998-07-21T09:20:00" },
{ name: "이하늘", time: "2001-01-05T08:45:00" },
{ name: "박하영", time: "1992-04-22T12:00:00" },
{ name: "최지훈", time: "1996-08-17T11:40:00" },
{ name: "조민지", time: "1999-10-30T13:30:00" },
{ name: "김유나", time: "1995-02-06T07:05:00" },
];
const adminPassword = "admin123"; // 관리자 비밀번호

function drawAnalogClock(canvas, time) {
    const ctx = canvas.getContext('2d');
    const radius = canvas.width / 2;
    ctx.translate(radius, radius);

    // Draw the clock face
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.9, 0, 2 * Math.PI);
    ctx.fillStyle = '#1e1e1e';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw the hands
    const hours = time.getHours() % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourAngle = (hours * Math.PI) / 6 + (minutes * Math.PI) / 360;
    const minuteAngle = (minutes * Math.PI) / 30;
    const secondAngle = (seconds * Math.PI) / 30;

    // Hour hand
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.rotate(hourAngle);
    ctx.lineTo(0, -radius * 0.5);
    ctx.stroke();
    ctx.rotate(-hourAngle);

    // Minute hand
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.rotate(minuteAngle);
    ctx.lineTo(0, -radius * 0.7);
    ctx.stroke();
    ctx.rotate(-minuteAngle);

    // Second hand
    ctx.strokeStyle = '#ff0000';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.rotate(secondAngle);
    ctx.lineTo(0, -radius * 0.9);
    ctx.stroke();
    ctx.rotate(-secondAngle);
    ctx.translate(-radius, -radius);
}

function updateClocks() {
    const container = document.getElementById('clock-container');
    container.innerHTML = '';

    customTimes.forEach((custom, index) => {
        const customTime = new Date(custom.time);
        customTime.setSeconds(customTime.getSeconds() + 1); // 시간 증가
        custom.time = customTime.toISOString();

        const div = document.createElement('div');
        div.className = 'city';
        div.innerHTML = `
            <h2>${custom.name}</h2>
            <p>${customTime.toLocaleTimeString()}</p>
            <p>${customTime.toLocaleDateString()}</p>
            <canvas width="150" height="150"></canvas>
            <button onclick="openAdminModal(${index})">Delete</button>
        `;
        const canvas = div.querySelector('canvas');
        drawAnalogClock(canvas, customTime);

        container.appendChild(div);
    });
}

function openAdminModal(index) {
    const modal = document.getElementById('admin-modal');
    modal.style.display = "block";
    const verifyButton = document.getElementById('verify-admin');
    verifyButton.onclick = () => verifyAdmin(index);
}

function verifyAdmin(index) {
    const password = document.getElementById('admin-password').value;
    if (password === adminPassword) {
        customTimes.splice(index, 1);
        closeAdminModal();
        updateClocks();
    } else {
        alert("비밀번호가 잘못되었습니다.");
    }
}

function closeAdminModal() {
    const modal = document.getElementById('admin-modal');
    modal.style.display = "none";
}

function toggleManifesto() {
    const manifesto = document.getElementById("manifesto-content");
    manifesto.style.display = (manifesto.style.display === "none" ? "block" : "none");
}

document.getElementById("toggle-manifesto").addEventListener("click", toggleManifesto);

document.addEventListener("DOMContentLoaded", function () {
    updateClocks();
    setInterval(updateClocks, 1000); // 매초 갱신
});
