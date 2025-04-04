function postComment() {
    let commentText = document.getElementById("commentText").value.trim();

    if (commentText === "") {
        alert("Please enter a comment before posting!");
        return;
    }

    // Get the current date and time
    let now = new Date();
    let formattedTime = now.toLocaleString("en-US", { 
        year: "numeric", 
        month: "short", 
        day: "2-digit", 
        hour: "2-digit", 
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });

    // Create comment div
    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comment", "user-comment");

    // Create comment box
    let commentBox = document.createElement("div");
    commentBox.classList.add("comment-box");

    // Create paragraph for text
    let commentParagraph = document.createElement("p");
    commentParagraph.innerText = commentText;

    // Create timestamp
    let timestamp = document.createElement("span");
    timestamp.classList.add("timestamp");
    timestamp.innerText = formattedTime;

    // Append elements
    commentBox.appendChild(commentParagraph);
    commentBox.appendChild(timestamp);
    commentDiv.appendChild(commentBox);

    // Append to comments section
    document.querySelector(".comments-section").appendChild(commentDiv);

    // Scroll to the bottom to see the latest message
    document.querySelector(".comments-section").scrollTop = document.querySelector(".comments-section").scrollHeight;

    // Clear input field
    document.getElementById("commentText").value = "";
}
