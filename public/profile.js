const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isProfileAnimatingOut, setIsProfileAnimatingOut] = useState(false);

  // State for Analytic Modal
  const [isAnalyticModalOpen, setIsAnalyticModalOpen] = useState(false);
  const [isAnalyticAnimatingOut, setIsAnalyticAnimatingOut] = useState(false);

  // State for Contact Modal
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isContactAnimatingOut, setIsContactAnimatingOut] = useState(false);

  const modalRef = useRef(null);

  // Functions for Profile Modal
  const openProfileModal = () => {
    setIsProfileAnimatingOut(false);
    setIsProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setIsProfileAnimatingOut(true);
  };

  // Functions for Analytic Modal
  const openAnalyticModal = () => {
    setIsAnalyticAnimatingOut(false);
    setIsAnalyticModalOpen(true);
  };

  const closeAnalyticModal = () => {
    setIsAnalyticAnimatingOut(true);
  };

  // Functions for Contact Modal
  const openContactModal = () => {
    setIsContactAnimatingOut(false);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactAnimatingOut(true);
  };

  const [playClick] = useSound(
        '/sound/buble-pop.mp3',
        { volume: 0.10 } // You can customize options
    );

    // --- CREATE HANDLERS ---
    const handleProfileClick = () => {
        playClick(); // It's that simple!
        openProfileModal();
    };
    const handleAnalyticClick = () => {
        playClick(); // It's that simple!
        openAnalyticModal();
    };
    const handleContactClick = () => {
        playClick(); // It's that simple!
        openContactModal();
    };
    const handleProfilecloseClick = () => {
        playClick(); // It's that simple!
        closeProfileModal();
    };
    const handleAnalyticcloseClick = () => {
        playClick(); // It's that simple!
        closeAnalyticModal();
    };
    const handleContactcloseClick = () => {
        playClick(); // It's that simple!
        closeContactModal();
    };


  useEffect(() => {
    if (isProfileAnimatingOut) {
      const timer = setTimeout(() => {
        setIsProfileModalOpen(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isProfileAnimatingOut]);

  useEffect(() => {
    if (isAnalyticAnimatingOut) {
      const timer = setTimeout(() => {
        setIsAnalyticModalOpen(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isAnalyticAnimatingOut]);

  useEffect(() => {
    if (isContactAnimatingOut) {
      const timer = setTimeout(() => {
        setIsContactModalOpen(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isContactAnimatingOut]);