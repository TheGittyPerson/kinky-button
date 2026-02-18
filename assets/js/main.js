const messages = [
    "Good boy...",
    "Oooh yes daddy...",
    "🫦",
    "That's right...",
    "You like that, don't you?",
    "Such a good boy...",
    "I know you want it...",
    "You can do better than that...",
    "Ooohh...",
    "So naughty...",
    "Unnnhhh...",
    "I like that you listen to me...",
    "It's getting hot in here, isn't it?",
    "Mmmhhhphhh...",
    "Be my good boy...",
    "Keep going...",
    "Good job...",
    "Ohhhh my Goooood...",
    "That felt goooood...",
    "Ooooohhh yes daddy, keep going...",
    "You can do better than that, but I love this...",
    "You impress me greatly...",
    "Faster...",
    "Harder...",
    "I'm getting numb...",
    "🥵",
    "You're turning me on like a switch...",
    "Amazing...",
    "Don't stop now...",
    "You make me feel so...",
    "Is that all you got?",
    "Give it to me...",
    "Is that it? I know you can do more than that...",
    "💦💦💦",
    "Oooh, that's tight...",
    "Keep cliking, Daddy...",
    "Click me like you mean it...",
    "This feels like heaven...",
    "Oooohhh, I'm getting close...",
    "Yes, right there...",
    "I hope this is touchsrcreen...",
    "I feel a lot more than a button today...",
    "I'm almost there...",
    "Don't stop, Daddy...",
    "I want to feel your cursor all over me...",
    "Mmphhh, Oohhh—just keep clicking Daddy...",
    "What a good boy you are...",
    "Oooohhh, yessss... Ooohh my gooood...",
    "Hold tight...",
    "I can feel it...",
    "Ohhh, what's happening...",
    "I like this... I like this a lot...",
    "Oooh, I wasn't expecting that...",
    "UUUNNNHhhhhhhhhoohhh, I wasn't ready for this...",
    "🫦🫦🫦🫦 Oh my god...Ohhhh..."
];

let clicks = 0;
const button = document.querySelector("button");
button.addEventListener("click", () => {
    clicks++;
    document.getElementById("click-count").textContent = `Clicks: ${clicks}`;
    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
});
