document.getElementById('leaveForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const leaveType = document.getElementById('leaveType').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const reason = document.getElementById('reason').value;

    alert(`Leave application submitted:
    Name: ${name}
    Email: ${email}
    Email: ${email}
    Email: ${email}
    Email: ${email}
    Leave Type: ${leaveType}
    Start Date: ${startDate}
    End Date: ${endDate}
     cting: ${acting}
    Reason: ${reason}`);
});
