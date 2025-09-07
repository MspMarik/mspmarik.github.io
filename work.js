function normalizeTimelineWidths() {
    let timeline_items = $("#timeline-list").children();
    // Adjust loop to avoid array out of bounds (length-1)
    for (let i = 1; i < timeline_items.length; i++) {
        // Use proper jQuery methods for width setting
        $(timeline_items[i]).width($(timeline_items[i - 1]).width());
    }
}

// Initial call to normalize widths
normalizeTimelineWidths();

// Replace resize event with ResizeObserver for better element size monitoring
const resizeObserver = new ResizeObserver(() => {
    normalizeTimelineWidths();
});

// Start observing the first timeline item
resizeObserver.observe($("#timeline-list").children().first()[0]);
