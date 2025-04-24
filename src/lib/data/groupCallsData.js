
export const groupCalls = [
    {
        id: '1',
        status: 'ongoing',
        title: 'Weekly Meeting - Product Demo Review with Testers',
        date: 'Mon. Jul 30, 2024',
        time: '9:00 AM - 11:00 AM',
        type: 'UX Strategy Study group',
        image: "/images/ProgramBannerImage.svg",
        participantsAction: {
          label: 'View Participants',
          onClick: () => console.log('View participants clicked')
        },
        joinAction: {
          label: 'Join Now',
          onClick: () => console.log('Join clicked')
        },
    
      },
      {
        id: '2',
        status: 'upcoming',
        title: 'Weekly Meeting - Product Demo Review with Testers',
        date: 'Mon. Jul 30, 2024',
        time: '10:00 AM - 11:00 AM',
        type: 'Study group',
        image: "/images/Rectangle12322.svg",
        participantsAction: {
          label: 'View Participants',
          onClick: () => console.log('View participants clicked')
        },
        joinAction: {
          label: 'Join Now',
          onClick: () => console.log('Join clicked')
        }
      },
      {
        id: '3',
        status: 'ongoing',
        title: 'Weekly Meeting - Product Demo Review with Tester', 
        date: 'Mon. Jul 30, 2024',
        time: '10:00 AM - 11:00 AM',
        type: 'UX Strategy Study group',
        image: "/images/Rectangle1232.svg",
        participantsAction: {
          label: 'View Participants',
          onClick: () => console.log('View participants clicked')
        },
        joinAction: {
          label: 'Join Now',
          onClick: () => console.log('Join clicked'),
          disabled: true 
        }
      }
]