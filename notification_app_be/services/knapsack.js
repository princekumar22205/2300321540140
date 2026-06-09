function maximizeImpact(tasks, capacity) {

    const n = tasks.length;

    // Step 1: Create DP table
    const dp = Array(n + 1)
        .fill()
        .map(() => Array(capacity + 1).fill(0));

    // Step 2: Fill DP table
    for (let i = 1; i <= n; i++) {

        const duration = tasks[i - 1].Duration;
        const impact = tasks[i - 1].Impact;

        for (let w = 0; w <= capacity; w++) {

            if (duration <= w) {
                dp[i][w] = Math.max(
                    impact + dp[i - 1][w - duration],
                    dp[i - 1][w]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }


    let selectedTasks = [];
    let w = capacity;

    for (let i = n; i > 0; i--) {

        if (dp[i][w] !== dp[i - 1][w]) {

            selectedTasks.push(tasks[i - 1]);

            w -= tasks[i - 1].Duration;
        }
    }

    selectedTasks.reverse();

    // Return final answer
    return {
        totalImpact: dp[n][capacity],
        selectedTasks
    };
}

module.exports = maximizeImpact;